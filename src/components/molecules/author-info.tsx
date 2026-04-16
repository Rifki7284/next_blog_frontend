import { Article } from "@/features/articles/types/articles";
import Image from "next/image";
interface AuthorInfoProps {
  article: Article;
}
const AuthorInfo = ({ article }: AuthorInfoProps) => {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold  overflow-hidden">
          <Image
            src={`http://localhost:1337${article?.author.avatar.url}`}
            width={500}
            height={500}
            alt="avatar"
          />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">
            {article?.author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            knowledge with the community.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AuthorInfo;
