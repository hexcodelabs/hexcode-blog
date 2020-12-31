/** @jsx jsx */
import { jsx ,Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from "../styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"

import BlogTop from "../assets/pictures/blog_top.svg";
import "../components/homepage.css";

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
      <Layout>
        <div className="home-inner__start">
          <h1 sx={visuallyHidden}>{siteTitle}</h1>
          <section sx={{ mb: [7], p: { fontSize: [2], mt: 2 }, variant: `section_hero` }}>
            <Hero />
            <nav sx={{ "a:not(:last-of-type)": { mr: 3 },fontWeight:"bold" ,fontSize: [3],fontFamily:"Playfair Display"}}>
                <TLink key="blog-button"as={Link} activeClassName="active" to={replaceSlashes(`/${basePath}/${blogPath}`)}>
                  Click here to start reading...
                </TLink>
            </nav>
          </section>
          <img src={BlogTop} id="bg" alt="" /> 
        </div>
        {/* <Link to={"/"} sx={{fontFamily:"Playfair Display"}}}>Blogs</Link> */}
        
        <Title text="Latest Posts" >
          <Link to={replaceSlashes(`/${basePath}/${blogPath}`)} >Read all posts</Link>
        </Title>
        <Listing posts={posts} showTags={false} />
        {/* <List sx={{ variant: `section_bottom` }}>
          <Bottom />
        </List> */}
      </Layout>
  )
}

export default Homepage
