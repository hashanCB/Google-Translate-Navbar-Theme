import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

const Placeholderbox = ({
  children,
  content,
  styles,
  toolX,
  shouldRender,
  fullName,
  accountName,
  email,
}) => {
  const [tooltips, setTooltips] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTooltips(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [tooltips]);

  return (
    <div className="relative ">
      {/* main elemtent style code */}
      <div
        className={`font-bold hover:bg-[#5f6368]/20  ${styles}  rounded-full cursor-pointer`}
        onMouseEnter={() => setTooltips(true)}
        onMouseLeave={() => setTooltips(false)}
      >
        {children}
      </div>

      {/* tooltips box funtion */}

      {tooltips && (
        <div
          className={`bg-[#494b4e] text-white  p-1 text-start  max-w-[200px] justify-center whitespace-nowrap text-[12px] tracking-wider  rounded absolute  
          ${
            shouldRender ? `-translate-x-[150px]` : `-translate-x-[${toolX}]`
          }  transform translate-y-2`}
        >
          {shouldRender ? (
            <UserProfile
              accountName={accountName}
              fullName={fullName}
              email={email}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Placeholderbox;
