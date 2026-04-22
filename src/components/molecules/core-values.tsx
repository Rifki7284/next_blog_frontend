import { CoreBlock } from "@/features/articles/types/blocks";
import { Book, Lightbulb, Users, Sparkles } from "lucide-react";

const iconMap: Record<string, any> = {
  book: Book,
  lightbulb: Lightbulb,
  users: Users,
  sparkles: Sparkles,
};
const iconStyle: Record<string, string> = {
  book: "bg-blue-100 text-blue-600",
  lightbulb: "bg-yellow-100 text-yellow-600",
  users: "bg-green-100 text-green-600",
  sparkles: "bg-purple-100 text-purple-600",
};
const CoreValues = ({ blocks }: { blocks: CoreBlock[] }) => {
  return (
    <div className="space-y-4">
      {blocks.map((value, index) => {
        const Icon = iconMap[value.iconName] || Book;
        const style = iconStyle[value.iconName] || "bg-gray-100 text-gray-600";
        return (
          <div className="flex gap-4 items-start" key={index}>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${style}`}
            >
              <Icon className="w-5 h-5" />
            </div>

            <div>
              <h3 className="font-bold mb-1 capitalize">{value.title}</h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CoreValues;
