import React, { useState, useEffect, useMemo } from 'react';

const SVGIcon = ({ className, svg_url, id }) => {
    const [svgContent, setSvgContent] = useState('');
    
    const uniqueId = useMemo(() => 
        `svg-content-${id || Math.random().toString(36).substr(2, 9)}`,
        [id]
    );

    const isGradientIcon = className.includes('gradient-icon');

    useEffect(() => {
        let isMounted = true;
        
        const fetchSVG = async () => {
            try {
                const response = await fetch(svg_url);
                const text = await response.text();
                
                if (isMounted) {
                    setSvgContent(text);
                    if (isGradientIcon) {
                        document.documentElement.style.setProperty(
                            `--${uniqueId}`,
                            `url("data:image/svg+xml,${encodeURIComponent(text)}")`
                        );
                    }
                }
            } catch (error) {
                console.error('Error fetching SVG:', error);
            }
        };

        fetchSVG();

        return () => {
            isMounted = false;
        };
    }, [svg_url, isGradientIcon, uniqueId]);

    const iconStyle = isGradientIcon
        ? { maskImage: `var(--${uniqueId})`, WebkitMaskImage: `var(--${uniqueId})` }
        : {};

    return (
        <span 
            className={`svgIcon ${className}`} 
            dangerouslySetInnerHTML={{ __html: svgContent }}
            style={iconStyle}
        />
    );
};

export default SVGIcon;
