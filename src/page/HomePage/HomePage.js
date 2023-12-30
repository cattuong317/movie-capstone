import React from "react";
import ListMovie from "./ListMovie";
import TabMovie from "./TabMovie/TabMovie";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <ListMovie />
      <TabMovie />
    </div>
  );
}
