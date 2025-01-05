import './Cell.css';

const Cell = ({ children, className = '', width = 'auto', style }) => {
    const widthClass = `cell-width-${width}`;

    return (
    <div className={`cell ${widthClass} ${className}`} style={style}>
        {children}
    </div>
    );
};

export default Cell;
