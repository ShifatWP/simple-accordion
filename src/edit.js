import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, TextControl, TabPanel, RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';
import dynamicCss from './dynamicCss';
import { useEffect } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';

const Edit = ({ clientId, attributes, setAttributes }) => {

    const { uniqueId } = attributes;

    const [activeTab, setActiveTab] = useState('general');

    useEffect(()=> {
      setAttributes({uniqueId: clientId})
    },[clientId])

    useEffect(()=> {
      setAttributes({frontendCss: JSON.stringify(dynamicCss(attributes))})
    },[attributes])

    const { itemsGap } = attributes;

    return(
    <>
      <InspectorControls>
      <TabPanel
          className="simple-accordion-tab-panel"
          activeClass="simple-accordion-active-tab"
          onSelect={(tabName) => setActiveTab(tabName)}
          activeTab={activeTab}
          tabs={[
              {
                  name: 'general',
                  title: 
                  <span className='simple-accordion-tab-panel-title'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={15}
                        fill="none"
                      >
                        <path
                          d="M10 10.15a2.613 2.613 0 0 0 2.505-1.87h1.832V6.785h-1.832a2.613 2.613 0 0 0-5.01 0H.803V8.28h6.692A2.613 2.613 0 0 0 10 10.15Zm0-3.74c.617 0 1.122.506 1.122 1.123 0 .616-.505 1.121-1.122 1.121a1.125 1.125 0 0 1-1.122-1.121c0-.617.505-1.122 1.122-1.122Z"
                        />
                        <path
                          d="M5.14 14.45a2.613 2.613 0 0 0 2.505-1.87h6.692v-1.496H7.645a2.613 2.613 0 0 0-5.01 0H.803v1.496h1.832a2.613 2.613 0 0 0 2.505 1.87Zm0-3.74c.617 0 1.121.505 1.121 1.122 0 .617-.504 1.122-1.121 1.122a1.125 1.125 0 0 1-1.122-1.122c0-.617.505-1.122 1.122-1.122ZM5.14 6.037a2.613 2.613 0 0 0 2.505-1.87h6.692V2.673H7.645a2.613 2.613 0 0 0-5.01 0H.803v1.496h1.832A2.613 2.613 0 0 0 5.14 6.037Zm0-3.739c.617 0 1.121.505 1.121 1.122 0 .617-.504 1.121-1.121 1.121A1.125 1.125 0 0 1 4.018 3.42c0-.617.505-1.122 1.122-1.122Z"
                        />
                      </svg>
                       {__('General', 'simple-accordion')}
                  </span>,
                  className: 'general-tab'
              },
              {
                  name: 'styles',
                  title:  
                  <span className='simple-accordion-tab-panel-title'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.845 6.994c-.438 0-.876.17-1.21.504-.67.669-1.043 2.67-2.646 3.597 1.914.14 3.635.107 5.068-1.176.704-.631.669-1.752 0-2.421a1.707 1.707 0 0 0-1.21-.504h-.002Z"
                          clipRule="evenodd"
                        />
                        <path
                          d="M15.805 4.928v8.886c0 .184-.218.454-.402.454H1.627c-.184 0-.427-.27-.427-.454V6.947l2.892-.019c.605-.004.902-.22.909-.824l.055-2.84h8.187l1.294-1.348-9.885-.011L0 6.306v7.508c0 .899.728 1.655 1.627 1.655h13.776c.899 0 1.602-.756 1.602-1.655V3.634l-1.2 1.294Z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M17.137 1.393 12 6.531l5.138-5.138Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M12 7.393a.863.863 0 0 1-.61-1.472L16.528.784a.863.863 0 0 1 1.22 1.22L12.61 7.14a.86.86 0 0 1-.61.252Z"
                          clipRule="evenodd"
                        />
                      </svg>
                   {__('Styles', 'simple-accordion')}
              </span>,
                  className: 'styles-tab',
              },
          ]}
      >
          { (tab) => (
              <>
                  {tab.name === 'general' && (
                      <div className='simple-accordion-tabs-content'>
                        <RangeControl
                          label={__('Gap between accordion items', 'simple-accordion')}
                          value={ itemsGap }
                          onChange={ ( value ) => setAttributes({ itemsGap: value }) }
                          min={ 5 }
                          max={ 100 }
                        />
                      </div>
                  )}
                  {tab.name === 'styles' && (
                      <div className='simple-accordion-tabs-content'>

                        

                        <PanelBody/>
                      </div>
                  )}
              </>
          )}
      </TabPanel>

  </InspectorControls>

        <div {...useBlockProps()}>
          <style>{dynamicCss(attributes)}</style>
            <InnerBlocks
                allowedBlocks={ [ 'task-block/simple-accordion-item' ] }
                orientation='vertical'
                template={[
                    ['task-block/simple-accordion-item'],
                    ['task-block/simple-accordion-item'],
                    ['task-block/simple-accordion-item']
                ]}
            />
        </div>
      </>
    )
};

export default Edit;
