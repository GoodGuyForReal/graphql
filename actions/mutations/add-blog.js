import db from "../../db.js";
import timestamp from "time-stamp";
import { v4 as uuid4 } from "uuid";

export function addBlog(args) {
    let blog = {
        ...args.blog,
        id: uuid4(),
        timestamp: timestamp("YYYYMMDD"),
      };

      db.blogs.push(blog);
      return blog;
}