import React from 'react';

import '../../public/styles/Judges.postcss';

const OverlayJudges = ({ isActive, items }) => (
    <div className={`ping-judges ${isActive ? 'opened' : ''}`}>
        <div className="ping-status">
            <div className="items">
                {items.map(item => (
                    <div className={`item ${!item.state.checking && item.state.working ? 'success' : !item.state.checking && !item.state.working ? 'error' : ''}`} key={item.url}>
                        <div className="url">{item.url}</div>
                        <div className="status">
                            {item.state.checking ? (
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="1em" height="1em" viewBox="0 0 128 128">
                                    <g transform="rotate(148.401 64 64)">
                                        <path d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" />
                                        <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1000ms" repeatCount="indefinite" />
                                    </g>
                                </svg>
                            ) : item.state.working ? (
                                <div className="response">{item.state.timeout} ms</div>
                            ) : (
                                <div className="response">Error</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default OverlayJudges;
