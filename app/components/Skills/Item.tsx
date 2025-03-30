"use client";
import React from "react";
import { SkillsItem as SkillsItemType } from "@/app/types/data";
import * as LucideIcons from "lucide-react";

interface SkillsItemProps {
  item: SkillsItemType;
}

export const SkillsItemSolo: React.FC<SkillsItemProps> = ({ item }) => {
  // Dynamically get the Lucide icon component
  const IconComponent = item.icon ? (LucideIcons as any)[item.icon] : null;

  return (
    <div className="p-4 border border-transparent bg-sky-200 hover:border hover:border-sky-500 rounded-lg transition-all flex items-center h-full gap-3">
      {IconComponent && <IconComponent className="min-h-8 min-w-8 text-sky-700" />}
      <div>
        <h4 className="text-md sm:text-xl font-bold group-hover:font-light">{item.title}</h4>
        <p className="text-md sm:text-xl text-stone-950">{item.level}</p>
      </div>
    </div>
  );
};