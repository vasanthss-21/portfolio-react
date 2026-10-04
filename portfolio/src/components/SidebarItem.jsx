import React from "react";

function SidebarItem() {
  return (
    <div className="flex items-center space-x-2 p-2">
      <img
        src="/logo.png"   // ✅ since logo is in public folder
        alt="Logo"
        className="w-6 h-6 rounded-full object-cover"
      />
      <span className="text-white">Portfolio</span>
    </div>
  );
}

export default SidebarItem;
