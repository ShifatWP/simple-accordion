import { cssString } from "./controls";

function dynamicCss(attributes) {
    const { uniqueId, itemsGap, titlleBgColor, contentBgColor, contentHoverBgColor, titleBgHover, titlleTextColor, titleTextHover, titleTextAlingment, iconPosition, iconColor, iconHoverColor, titlePadding, contentPadding } = attributes;

    let desktopCss = {
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item`]: {
            'margin-bottom': itemsGap + 'px',
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__title`]: {
            'background-color': titlleBgColor,
            'padding': `${titlePadding.top} ${titlePadding.right} ${titlePadding.bottom} ${titlePadding.left}`
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__title:hover`]: {
            'background-color': titleBgHover
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__title .accordion__title-text`]: {
            'color': titlleTextColor,
            'text-align': titleTextAlingment
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__title:hover .accordion__title-text`]: {
            'color': titleTextHover,
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__content`]: {
            'background-color': contentBgColor,
            'padding': `${contentPadding.top} ${contentPadding.right} ${contentPadding.bottom} ${contentPadding.left}`
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__content:hover`]: {
            'background-color': contentHoverBgColor
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId}  .accordion__item .accordion__title .accordion__arrow`]: {
            'order': iconPosition,
            'color': iconColor
        },
        [`.wp-block-task-block-simple-accordion-${uniqueId} .accordion__item .accordion__title:hover .accordion__arrow`]: {
            'color': iconHoverColor,
        },
    };
    

    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
};
export default dynamicCss;