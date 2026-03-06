import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, MessageCircle, Bookmark, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

type Filter = 'All' | 'Behaviour' | 'Training' | 'Nutrition'

const FILTER_KEYS: Filter[] = ['All', 'Behaviour', 'Training', 'Nutrition']

const articles = [
  {
    category: 'Behaviour' as Filter,
    categoryColor: 'bg-orange-50 text-orange-500',
    title: '7 Signs Your Dog Is Anxious (And What To Do)',
    excerpt: 'Learn to read the subtle body language cues that indicate stress in dogs, from yawning to whale eye.',
    readTime: '4 min read',
    author: 'Dr. Sofia Lund',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
  },
  {
    category: 'Training' as Filter,
    categoryColor: 'bg-green-50 text-green-700',
    title: 'Loose-Leash Walking in 10 Days',
    excerpt: 'A step-by-step positive reinforcement program to stop pulling without corrections or aversives.',
    readTime: '6 min read',
    author: 'Erik Johansson',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80',
  },
  {
    category: 'Nutrition' as Filter,
    categoryColor: 'bg-orange-50 text-orange-600',
    title: 'Is Grain-Free Really Better for Your Dog?',
    excerpt: 'Unpacking the science behind grain-free diets and what the latest veterinary research actually says.',
    readTime: '5 min read',
    author: 'Dr. Marie Björk',
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80',
  },
]

const posts = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    user: 'Maja S.',
    time: '2h ago',
    content: 'Bjørn just completed his first off-leash recall test at 50m! 8 months of work but so worth it',
    likes: 24,
    replies: 6,
    liked: false,
  },
  {
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    user: 'Lars P.',
    time: '5h ago',
    content: 'Anyone elses Golden suddenly scared of the vacuum? Mine is 4 years old and just started this week…',
    likes: 11,
    replies: 14,
    liked: true,
  },
]

export default function Community() {
  const [filter, setFilter] = useState<Filter>('All')
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set(posts.flatMap((p, i) => p.liked ? [i] : [])))
  const { t } = useLanguage()

  const filterLabels: Record<Filter, string> = {
    'All': t('comm.all'),
    'Behaviour': t('comm.behaviour'),
    'Training': t('comm.training'),
    'Nutrition': t('comm.nutrition'),
  }

  const filtered = articles.filter(a =>
    filter === 'All' ? true : a.category === filter
  )

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <header className="flex items-center justify-between px-7 border-b border-grey-200 bg-white h-16 shrink-0">
        <div>
          <h1 className="font-rubrik font-bold text-lg text-grey-900">{t('comm.title')}</h1>
          <p className="font-text text-[13px] text-grey-500">{t('comm.subtitle')}</p>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden flex gap-5 p-6">
        {/* Articles */}
        <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col gap-5 overflow-hidden">
          <div className="flex items-center justify-between shrink-0">
            <h2 className="font-rubrik font-bold text-base text-grey-900">{t('comm.expertArticles')}</h2>
            <div className="flex gap-1 bg-grey-100 rounded-lg p-1">
              {FILTER_KEYS.map(key => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 rounded-md font-rubrik text-[12px] transition-colors cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-orange-300
                    ${filter === key ? 'bg-white text-grey-900 font-bold shadow-sm' : 'text-grey-500 hover:text-grey-700'}`}
                >
                  {filterLabels[key]}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-y-auto flex-1 space-y-4">
            {filtered.map(a => (
              <div key={a.title} className="border border-grey-200 rounded-xl overflow-hidden flex">
                <div className="w-28 bg-grey-100 shrink-0 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`px-2 py-0.5 rounded-full font-rubrik font-bold text-[11px] ${a.categoryColor}`}>
                        {filterLabels[a.category]}
                      </span>
                      <span className="font-text text-[11px] text-grey-500">{a.readTime}</span>
                    </div>
                    <p className="font-rubrik font-bold text-[14px] text-grey-900 mb-1">{a.title}</p>
                    <p className="font-text text-[13px] text-grey-500 leading-relaxed line-clamp-2">{a.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="font-text text-[12px] text-grey-500">By {a.author}</p>
                    <Link to="/community" className="flex items-center gap-1 font-rubrik font-bold text-[12px] text-orange-500 hover:text-orange-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 rounded">
                      {t('comm.readMore')} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community feed */}
        <div className="w-72 flex flex-col gap-4 shrink-0">
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 flex-1 overflow-hidden">
            <h3 className="font-rubrik font-bold text-[15px] text-grey-900 shrink-0">{t('comm.communityPosts')}</h3>
            <div className="space-y-4 overflow-y-auto flex-1">
              {posts.map((post, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img src={post.avatar} alt={post.user} className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div>
                      <p className="font-rubrik font-bold text-[13px] text-grey-900">{post.user}</p>
                      <p className="font-text text-[11px] text-grey-500">{post.time}</p>
                    </div>
                  </div>
                  <p className="font-text text-[13px] text-grey-700 leading-relaxed">{post.content}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        const next = new Set(likedPosts)
                        next.has(i) ? next.delete(i) : next.add(i)
                        setLikedPosts(next)
                      }}
                      aria-label="Like post"
                      className="flex items-center gap-1.5 font-text text-[12px] text-grey-500 hover:text-orange-400 transition-colors cursor-pointer min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-orange-300 rounded"
                    >
                      <Heart
                        size={14}
                        className={likedPosts.has(i) ? 'fill-orange-400 text-orange-400' : ''}
                      />
                      {post.likes + (likedPosts.has(i) && !post.liked ? 1 : !likedPosts.has(i) && post.liked ? -1 : 0)}
                    </button>
                    <button onClick={() => {}} aria-label="Reply" className="flex items-center gap-1.5 font-text text-[12px] text-grey-500 hover:text-orange-400 transition-colors cursor-pointer min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-orange-300 rounded">
                      <MessageCircle size={14} /> {post.replies}
                    </button>
                    <button onClick={() => {}} aria-label="Save post" className="flex items-center gap-1.5 font-text text-[12px] text-grey-500 hover:text-orange-400 transition-colors ml-auto cursor-pointer min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-orange-300 rounded">
                      <Bookmark size={14} />
                    </button>
                  </div>
                  {i < posts.length - 1 && <div className="h-px bg-grey-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
