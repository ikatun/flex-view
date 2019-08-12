import * as React from 'react';
export declare class FlexView extends React.Component<{
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
    renderChild: (child: any, index: any, all: any) => React.FunctionComponentElement<{
        style: any[];
        key: any;
    }>;
    render(): JSX.Element;
}
