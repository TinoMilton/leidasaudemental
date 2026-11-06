import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, type BlogPost } from '@/data/blogPosts';
import { parseContent } from '@/lib/markdown';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navbar } from '@/sections/Navbar';
import { Footer } from '@/sections/Footer';
import { AdSlot } from '@/components/AdSlot';
import { adSlots } from '@/lib/adsense';
import { usePageMeta } from '@/hooks/usePageMeta';

// In-article ads go before these h2 headings, i.e. after sections 2 and 5
const IN_ARTICLE_AD_BEFORE_H2 = [3, 6];

function renderInArticleAd(ordinal: number, key: string) {
  if (!IN_ARTICLE_AD_BEFORE_H2.includes(ordinal)) return null;
  return <AdSlot key={key} slot={adSlots.blogInArticle} format="fluid" layout="in-article" />;
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold text-[#4A7C59] mb-1">
          {post.category}
        </span>
        <h4 className="font-semibold text-[#1F2937] line-clamp-2 group-hover:text-[#4A7C59] transition-colors">
          {post.title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-[#6B7280] mt-2">
          <Clock className="w-3 h-3" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function TableOfContents({ content }: { content: string }) {
  const headings = content.match(/^#{2,3}\s+.+$/gm) || [];
  
  if (headings.length === 0) return null;

  return (
    <div className="bg-[#F5F7F5] rounded-xl p-6 mb-8">
      <h3 className="font-bold text-[#1F2937] mb-4">Conteúdo</h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => {
          const level = heading.match(/^#+/)?.[0].length || 2;
          const text = heading.replace(/^#+\s+/, '');
          const slug = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
          
          return (
            <li key={index} className={`${level === 3 ? 'ml-4' : ''}`}>
              <a
                href={`#${slug}`}
                className="text-sm text-[#6B7280] hover:text-[#4A7C59] transition-colors flex items-center gap-2"
              >
                <ChevronRight className="w-3 h-3" />
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  // Fire on the first visible pixel: long articles can never reach a 10% ratio on small screens
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: post ? `${post.title} | Lei da Saúde Mental` : 'Artigo não encontrado | Lei da Saúde Mental',
    description: post?.excerpt ?? 'O artigo que você procura não existe ou foi removido.',
    path: post ? `/blog/${post.slug}` : '/blog',
    image: post?.image,
    type: post ? 'article' : 'website',
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-[120px] pb-20 text-center">
          <h1 className="text-3xl font-bold text-[#1F2937] mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-[#6B7280] mb-6">
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link to="/blog" className="btn-primary">
            Ver todos os artigos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(shareUrl);
    
    let shareLink = '';
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-[90px] bg-gradient-to-b from-[#E8F5E9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Link */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#4A7C59] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          {/* Category */}
          <span className="inline-block bg-[#4A7C59] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Author Box */}
            <div className="flex items-center gap-4 p-4 bg-[#F5F7F5] rounded-xl mb-8">
              <div className="w-12 h-12 bg-[#4A7C59] rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#1F2937]">{post.author}</p>
                <p className="text-sm text-[#6B7280]">{post.authorRole}</p>
              </div>
            </div>

            {/* Table of Contents - Mobile */}
            <div className="lg:hidden">
              <TableOfContents content={post.content} />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {parseContent(post.content, { beforeH2: renderInArticleAd })}
            </article>

            <AdSlot slot={adSlots.blogFooter} />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-[#E8F5E9]">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-[#4A7C59]" />
                <span className="font-semibold text-[#1F2937]">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#F5F7F5] text-[#6B7280] text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-[#E8F5E9]">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-[#1F2937] flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Compartilhar:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-10 h-10 bg-[#1877F2] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Compartilhar no Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-10 h-10 bg-[#1DA1F2] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Compartilhar no Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-10 h-10 bg-[#0A66C2] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Compartilhar no LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents content={post.content} />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-bold text-[#1F2937] mb-4">Artigos Relacionados</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Related Posts - Mobile */}
        <div className="lg:hidden mt-12">
          <h3 className="font-bold text-[#1F2937] mb-4">Artigos Relacionados</h3>
          <div className="space-y-4">
            {relatedPosts.map(relatedPost => (
              <RelatedPostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
