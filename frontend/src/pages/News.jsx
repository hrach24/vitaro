import React, { useState, useEffect } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { newsAPI } from '../api';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', ...new Set(newsArticles.map(article => article.category))];

  const filteredArticles = selectedFilter === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest news, product launches, and industry insights from VITARO Medical
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedFilter === category
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                   onClick={() => setSelectedArticle(filteredArticles[0])}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full text-sm">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
                        {filteredArticles[0].category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(filteredArticles[0].date)}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full flex items-center gap-1">
                      <Tag size={12} />
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-1 text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
                    {selectedArticle.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={16} />
                    {formatDate(selectedArticle.date)}
                  </span>
                </div>
                <DialogTitle className="text-3xl">{selectedArticle.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">{selectedArticle.excerpt}</p>
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 leading-relaxed">
                      This is a comprehensive article about {selectedArticle.title.toLowerCase()}. The full content would include detailed information about the announcement, its implications for the healthcare industry, and how it benefits VITARO's customers and partners.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      For more information or media inquiries, please contact our press office at press@vitaro-medical.com
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default News;