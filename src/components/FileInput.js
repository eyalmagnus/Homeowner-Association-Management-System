import React from "react";

const noop = () => { };

const FileInput = ({ value, onChange = noop, ...rest }) => (
    <div>
        {Boolean(value.length) && (
            <div>Selected files: {value.map(f => f.name).join(", ")}</div>
        )}
        <label>
            Click to select some files...
      <input
                {...rest}
                style={{ display: "none" }}
                type="file"
                onChange={e => {
                    onChange([...e.target.files]);
                }}
            />
        </label>
    </div>
);

export default FileInput;

// import React, { useEffect, useRef } from "react";

// const FileInput = ({ value, ...rest }) => {
//     const inputRef = useRef();

//     useEffect(() => {
//         if (value === "") {
//             inputRef.current.value = "";
//         } else {
//             inputRef.current.files = value;
//         }
//     }, [value]);

//     return <input {...rest} type="file" ref={inputRef} />;
// };

// export default FileInput;