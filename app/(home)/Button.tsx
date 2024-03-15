"use client";

function Button() {
    const handleClick = async () => {
      alert("Button clicked");
    };
  
    return (
        <div>
            <button  onClick={handleClick}>Buttonn</button>
        </div>
    );
  }

export default Button