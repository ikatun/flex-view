/* eslint-disable no-mixed-operators */
import { css } from 'css-rn';
import { memoize } from 'lodash';
import * as React from 'react';
import { View } from 'react-native';

const flexCss = css`
  display: flex;
`;

function parseAlignProps(props) {
  return (
    props.stretch && 'stretch' ||
    props.alignCenter && 'center' ||
    props.alignStart && 'flex-start' ||
    props.alignEnd && 'flex-end' ||
    props.baseline && 'baseline' ||
    'stretch'
  );
}

function parseJustificationProps(props) {
  return (
    props.justifyStart && 'flex-start' ||
    props.justifyEnd && 'flex-end' ||
    props.justifyCenter && 'center' ||
    props.spaceBetween && 'space-between' ||
    props.spaceAround && 'space-around' ||
    'flex-start'
  );
}

function parseDirectionProps(props) {
  return (
    props.rowDirection && 'row' ||
    props.rowReverseDirection && 'row-reverse' ||
    props.columnDirection && 'column' ||
    props.columnReverseDirection && 'column-reverse' ||
    'row'
  );
}

function parseWrapProps(props) {
  return (
    props.wrap && 'wrap' ||
    props.wrapReverse && 'wrap-reverse' ||
    'nowrap'
  );
}

function parseFlexProp(props) {
  return props.flex || '1 1 auto';
}

const getPaddingCss = memoize((paddingBetween, isColumnDirection, index, length) => {
  const rowFirst = css`
    padding-right: ${paddingBetween};
  `;
  const rowLast = css`
    padding-left: ${paddingBetween};
  `;
  const rowItem = css`
    padding-left: ${paddingBetween};
    padding-right: ${paddingBetween};
  `;
  const columnFirst = css`
    padding-bottom: ${paddingBetween};
  `;
  const columnLast = css`
    padding-top: ${paddingBetween};
  `;
  const columnItem = css`
    padding-top: ${paddingBetween};
    padding-bottom: ${paddingBetween};
  `;
  const lastIndex = length - 1;

  return isColumnDirection ? [
    index === 0 && index < lastIndex && columnFirst,
    index > 0 && index === lastIndex && columnLast,
    index > 0 && index < lastIndex && columnItem,
  ] : [
    index === 0 && index < lastIndex && rowFirst,
    index > 0 && index === lastIndex && rowLast,
    index > 0 && index < lastIndex && rowItem,
  ];
}, (...args) => args.join(','));

export class FlexView extends React.Component<{
  children: any;
  stretch?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  baseline?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  style?: Object;
  rowDirection?: boolean;
  rowReverseDirection?: boolean;
  columnDirection?: boolean;
  columnReverseDirection?: boolean;
  wrap?: boolean;
  wrapReverse?: boolean;
  flex?: string;
  paddingBetween?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}> {
  renderChild = (child, index, all) => {
    const { rowDirection, rowReverseDirection, paddingBetween } = this.props;
    const isRowDirection = rowDirection || rowReverseDirection;
    const style = getPaddingCss(paddingBetween, !isRowDirection, index, all.length);

    return React.cloneElement(child, { style: [style, child.props.style], key: child.key });
  }

  render() {
    const {
      children,
      style,
      paddingBetween,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      ...props
    } = this.props;

    const flexConfigCss = css`
      align-items: ${parseAlignProps(props)};
      justify-content: ${parseJustificationProps(props)};
      flex-direction: ${parseDirectionProps(props)};
      flex-wrap: ${parseWrapProps(props)};
      flex: ${parseFlexProp(props)};
      margin-top: ${marginTop};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
      margin-right: ${marginRight};
      margin-top: ${marginTop};
      padding-top: ${paddingTop};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};
      padding-top: ${paddingTop};
    `;

    if (!paddingBetween) {
      return (
        <View style={[flexCss, flexConfigCss, style]}>
          {children}
        </View>
      );
    }

    return (
      <View style={[flexCss, flexConfigCss, style]}>
        {React.Children.toArray(children).map(this.renderChild)}
      </View>
    );
  }
}
