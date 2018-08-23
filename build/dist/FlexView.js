import * as tslib_1 from "tslib";
/* eslint-disable no-mixed-operators */
import { css } from 'css-rn';
import { memoize } from 'lodash';
import * as React from 'react';
import { View } from 'react-native';
var flexCss = css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
function parseAlignProps(props) {
    return (props.stretch && 'stretch' ||
        props.alignCenter && 'center' ||
        props.alignStart && 'flex-start' ||
        props.alignEnd && 'flex-end' ||
        props.baseline && 'baseline' ||
        'stretch');
}
function parseJustificationProps(props) {
    return (props.justifyStart && 'flex-start' ||
        props.justifyEnd && 'flex-end' ||
        props.justifyCenter && 'center' ||
        props.spaceBetween && 'space-between' ||
        props.spaceAround && 'space-around' ||
        'flex-start');
}
function parseDirectionProps(props) {
    return (props.rowDirection && 'row' ||
        props.rowReverseDirection && 'row-reverse' ||
        props.columnDirection && 'column' ||
        props.columnReverseDirection && 'column-reverse' ||
        'row');
}
function parseWrapProps(props) {
    return (props.wrap && 'wrap' ||
        props.wrapReverse && 'wrap-reverse' ||
        'nowrap');
}
function parseFlexProp(props) {
    return props.flex || '1 1 auto';
}
var getPaddingCss = memoize(function (paddingBetween, isColumnDirection, index, length) {
    var rowFirst = css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    padding-right: ", ";\n  "], ["\n    padding-right: ", ";\n  "])), paddingBetween);
    var rowLast = css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    padding-left: ", ";\n  "], ["\n    padding-left: ", ";\n  "])), paddingBetween);
    var rowItem = css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    padding-left: ", ";\n    padding-right: ", ";\n  "], ["\n    padding-left: ", ";\n    padding-right: ", ";\n  "])), paddingBetween, paddingBetween);
    var columnFirst = css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n    padding-bottom: ", ";\n  "], ["\n    padding-bottom: ", ";\n  "])), paddingBetween);
    var columnLast = css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n    padding-top: ", ";\n  "], ["\n    padding-top: ", ";\n  "])), paddingBetween);
    var columnItem = css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n    padding-top: ", ";\n    padding-bottom: ", ";\n  "], ["\n    padding-top: ", ";\n    padding-bottom: ", ";\n  "])), paddingBetween, paddingBetween);
    var lastIndex = length - 1;
    return isColumnDirection ? [
        index === 0 && index < lastIndex && columnFirst,
        index > 0 && index === lastIndex && columnLast,
        index > 0 && index < lastIndex && columnItem,
    ] : [
        index === 0 && index < lastIndex && rowFirst,
        index > 0 && index === lastIndex && rowLast,
        index > 0 && index < lastIndex && rowItem,
    ];
}, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.join(',');
});
var FlexView = /** @class */ (function (_super) {
    tslib_1.__extends(FlexView, _super);
    function FlexView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChild = function (child, index, all) {
            var _a = _this.props, rowDirection = _a.rowDirection, rowReverseDirection = _a.rowReverseDirection, paddingBetween = _a.paddingBetween;
            var isRowDirection = rowDirection || rowReverseDirection;
            var style = getPaddingCss(paddingBetween, !isRowDirection, index, all.length);
            return React.cloneElement(child, { style: [style, child.props.style], key: child.key });
        };
        return _this;
    }
    FlexView.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, paddingBetween = _a.paddingBetween, marginTop = _a.marginTop, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, props = tslib_1.__rest(_a, ["children", "style", "paddingBetween", "marginTop", "marginBottom", "marginLeft", "marginRight", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight"]);
        var flexConfigCss = css(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n      align-items: ", ";\n      justify-content: ", ";\n      flex-direction: ", ";\n      flex-wrap: ", ";\n      flex: ", ";\n      margin-top: ", ";\n      margin-bottom: ", ";\n      margin-left: ", ";\n      margin-right: ", ";\n      margin-top: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n    "], ["\n      align-items: ", ";\n      justify-content: ", ";\n      flex-direction: ", ";\n      flex-wrap: ", ";\n      flex: ", ";\n      margin-top: ", ";\n      margin-bottom: ", ";\n      margin-left: ", ";\n      margin-right: ", ";\n      margin-top: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n    "])), parseAlignProps(props), parseJustificationProps(props), parseDirectionProps(props), parseWrapProps(props), parseFlexProp(props), marginTop, marginBottom, marginLeft, marginRight, marginTop, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingTop);
        if (!paddingBetween) {
            return (<View style={[flexCss, flexConfigCss, style]}>
          {children}
        </View>);
        }
        return (<View style={[flexCss, flexConfigCss, style]}>
        {React.Children.toArray(children).map(this.renderChild)}
      </View>);
    };
    return FlexView;
}(React.Component));
export { FlexView };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=FlexView.js.map