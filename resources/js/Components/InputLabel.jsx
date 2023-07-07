export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <div className="mt-4" style={{ width: '150px' }}>
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
        </div>
    );
}
