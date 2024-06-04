import { cssString } from "./controls";

function dynamicCss(attributes) {
    const { uniqueId, itemsGap, titlleBgColor } = attributes;

    let desktopCss = {
        [`.wp-block-task-block-simple-accordion .accordion__item`]: {
            'margin-bottom': itemsGap + 'px',
        },
        [`.wp-block-task-block-simple-accordion .accordion__item .accordion__title`]: {
            'background-color': titlleBgColor
        }
    };
    

    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
};
export default dynamicCss;