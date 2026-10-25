import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, User, ChevronRight, Filter } from 'lucide-react';
import { getAllPosts, type BlogPost } from '@/data/blogPosts';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navbar } from '@/sections/Navbar';
import { Footer } from '@/sections/Footer';
import { AdSlot } from '@/components/AdSlot';
import { adSlots } from '@/lib/adsense';

const categories = ['Todos', 'NR-1', 'Implementação', 'Prevenção', 'Legislação'];

function BlogCard({ post, index, isVisible }: { post: BlogPost; index: number; isVisible: boolean }) {
  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/blog/${post.slug}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#4A7C59] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1F2937] mb-3 line-clamp-2 group-hover:text-[#4A7C59] transition-colors">
            {post.title}
          </h3>
          <p className="text-[#6B7280] mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-[#6B7280]">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More */}
          <div className="mt-4 pt-4 border-t border-[#E8F5E9]">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C59] group-hover:gap-3 transition-all">
              Ler artigo
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#4A7C59] text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Destaque
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <span className="text-sm font-semibold text-[#4A7C59] mb-2">
            {post.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4 group-hover:text-[#4A7C59] transition-colors">
            {post.title}
          </h2>
          <p className="text-[#6B7280] mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>

          {/* Read More */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-[#4A7C59] font-semibold group-hover:gap-3 transition-all">
              Ler artigo completo
              <ChevronRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const allPosts = getAllPosts();
  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  const filteredPosts = remainingPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F7F5]">
      <Navbar />

      {/* Hero */}
      <div className="pt-[90px] bg-gradient-to-b from-[#E8F5E9] to-[#F5F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-label">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
              Artigos sobre <span className="text-[#4A7C59]">Saúde Mental</span>
            </h1>
            <p className="text-lg text-[#6B7280]">
              Conteúdo especializado para ajudar sua empresa na adequação à Lei 14.831/2024
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="sticky top-[70px] z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#4A7C59] text-white'
                      : 'bg-[#F5F7F5] text-[#6B7280] hover:bg-[#E8F5E9]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {!searchQuery && selectedCategory === 'Todos' && (
          <div className="mb-12">
            <FeaturedPost post={featuredPost} />
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <Fragment key={post.id}>
                <BlogCard
                  post={post}
                  index={index}
                  isVisible={isVisible}
                />
                {index === 2 && filteredPosts.length > 3 && (
                  <AdSlot slot={adSlots.blogList} className="col-span-full my-0" />
                )}
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-[#4A7C59]" />
            </div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">
              Nenhum artigo encontrado
            </h3>
            <p className="text-[#6B7280]">
              Tente ajustar seus filtros ou termos de busca
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div
          className={`mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
              Receba Novidades no Seu E-mail
            </h3>
            <p className="text-[#6B7280] mb-6">
              Inscreva-se para receber artigos exclusivos sobre saúde mental no
              trabalho e atualizações da legislação.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
