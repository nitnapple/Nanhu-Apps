import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  summary: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        category: data.category || "",
        author: data.author || "",
        readingTime: data.readingTime || "",
        summary: data.summary || "",
        content,
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      category: data.category || "",
      author: data.author || "",
      readingTime: data.readingTime || "",
      summary: data.summary || "",
      content,
    };
  } catch {
    return null;
  }
}
