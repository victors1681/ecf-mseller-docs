"use client";

import React, { useState } from "react";
import {
  Tabs as FumaTabs,
  TabsList,
  TabsTrigger,
  TabsContent as FumaTabsContent,
} from "fumadocs-ui/components/tabs";

export function Tabs({
  items,
  children,
}: {
  items: string[];
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(items[0]);

  return (
    <FumaTabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="mb-4">
        {items.map((item) => (
          <TabsTrigger key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </FumaTabs>
  );
}

export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <FumaTabsContent value={value}>{children}</FumaTabsContent>;
}
