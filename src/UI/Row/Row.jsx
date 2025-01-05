import './Row.css';

const Row = ({ children, className = '', align = 'left', justify = 'flex-start', gap = '0', style }) => {
    const alignClass = `row-align-${align}`;
    const justifyClass = `row-justify-${justify}`;
    const gapClass = `row-gap-${gap}`;

return (
    <div className={`row ${alignClass} ${justifyClass} ${gapClass} ${className}`} style={style}>
        {children}
    </div>
    );
};

export default Row;
