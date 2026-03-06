import { Link } from 'react-router-dom'
import { ShoppingCart, Star, ArrowRight, ShieldCheck, Salad, MessageCircle, ChevronRight, Bone, Dumbbell, HeartPulse } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? 'fill-orange-400 text-orange-400' : 'text-grey-300'}
        />
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      category: t('cat.dryFood'),
      categoryColor: 'bg-orange-50 text-orange-500',
      img: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-retail/breed-health-nutrition/golden-retriever-adult/royal-canin-breed-health-nutrition-golden-retriever-adult-dry-dog-food-harold.jpg',
      name: 'Royal Canin Golden Retriever Adult',
      desc: t('prod.desc1'),
      brand: 'Royal Canin',
      price: '1 009 kr',
      oldPrice: null,
      rating: 4.8,
      reviews: 312,
      badge: t('badge.bestseller'),
      badgeColor: 'bg-orange-400 text-white',
    },
    {
      id: 2,
      category: t('cat.dryFood'),
      categoryColor: 'bg-orange-50 text-orange-500',
      img: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-retail/breed-health-nutrition/golden-retriever-puppy/royal-canin-breed-health-nutrition-golden-retriever-puppy-dry-dog-food-packaging.jpg',
      name: 'Royal Canin Golden Retriever Puppy',
      desc: t('prod.desc2'),
      brand: 'Royal Canin',
      price: '1 009 kr',
      oldPrice: null,
      rating: 4.7,
      reviews: 186,
      badge: t('badge.puppy'),
      badgeColor: 'bg-green-600 text-white',
    },
    {
      id: 3,
      category: t('cat.dryFood'),
      categoryColor: 'bg-orange-50 text-orange-500',
      img: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-retail/size-health-nutrition/medium-adult/royal-canin-size-health-nutrition-medium-adult-dry-dog-food-packaging.jpg',
      name: 'Royal Canin Medium Adult',
      desc: t('prod.desc3'),
      brand: 'Royal Canin',
      price: '349 kr',
      oldPrice: '399 kr',
      rating: 4.6,
      reviews: 541,
      badge: t('badge.offer'),
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      id: 4,
      category: t('cat.dryFood'),
      categoryColor: 'bg-orange-50 text-orange-500',
      img: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-retail/size-health-nutrition/maxi-adult/royal-canin-size-health-nutrition-maxi-adult-dry-dog-food-packaging.jpg',
      name: 'Royal Canin Maxi Adult',
      desc: t('prod.desc4'),
      brand: 'Royal Canin',
      price: '899 kr',
      oldPrice: null,
      rating: 4.7,
      reviews: 203,
      badge: t('badge.largeBreed'),
      badgeColor: 'bg-grey-700 text-white',
    },
  ]

  const categories = [
    { label: t('cat.dryFood'), Icon: Salad,      bg: 'bg-orange-50',  border: 'border-orange-200', text: 'text-orange-500', ic: 'text-orange-400', route: '/shop' },
    { label: t('cat.toys'),    Icon: Dumbbell,   bg: 'bg-blue-50',    border: 'border-blue-200',   text: 'text-blue-600',  ic: 'text-blue-400',  route: '/shop' },
    { label: t('cat.snacks'),  Icon: Bone,       bg: 'bg-green-50',   border: 'border-green-200',  text: 'text-green-700', ic: 'text-green-500', route: '/shop' },
    { label: t('cat.health'),  Icon: HeartPulse, bg: 'bg-grey-100',   border: 'border-grey-200',   text: 'text-grey-700',  ic: 'text-grey-500',  route: '/health' },
  ]

  const insurancePlans = [
    {
      name: 'Lassie Bas',
      price: '249 kr/mån',
      highlight: t('ins.lassieHighlight'),
      perks: [t('ins.lassiePerk1'), t('ins.lassiePerk2'), t('ins.lassiePerk3')],
      badge: t('badge.mostPopular'),
      badgeColor: 'bg-orange-400 text-white',
      cardStyle: 'border-2 border-orange-400',
      btnStyle: 'bg-orange-400 hover:bg-orange-500 text-white',
    },
    {
      name: 'Agria Stor',
      price: '399 kr/mån',
      highlight: t('ins.agriaHighlight'),
      perks: [t('ins.agriaPerk1'), t('ins.agriaPerk2'), t('ins.agriaPerk3')],
      badge: t('badge.comprehensive'),
      badgeColor: 'bg-grey-700 text-white',
      cardStyle: 'border border-grey-200',
      btnStyle: 'bg-grey-100 hover:bg-grey-200 text-grey-900',
    },
  ]

  const nutritionArticles = [
    { img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80', title: t('art.title1'), desc: t('art.desc1'), tag: t('art.tag1') },
    { img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80', title: t('art.title2'), desc: t('art.desc2'), tag: t('art.tag2') },
    { img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80', title: t('art.title3'), desc: t('art.desc3'), tag: t('art.tag3') },
  ]

  const communityPosts = [
    { avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', user: 'Maja S.', time: t('post.time1'), content: t('post.content1'), likes: 24 },
    { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80', user: 'Lars P.', time: t('post.time2'), content: t('post.content2'), likes: 11 },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-10">

      {/* ── 1. Hero Banner ──────────────────────────────────────────────── */}
      <section className="rounded-2xl overflow-hidden bg-orange-400 flex items-stretch min-h-[280px]">
        <div className="flex-1 flex flex-col justify-center px-10 py-8 space-y-4">
          <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/20 font-rubrik font-bold text-[11px] text-white uppercase tracking-wider">
            {t('dash.newFormula')}
          </span>
          <h1 className="font-rubrik font-bold text-[36px] leading-tight text-white whitespace-pre-line">
            {t('dash.heroTitle')}
          </h1>
          <p className="font-text text-[15px] text-orange-50 max-w-xs">
            {t('dash.heroDesc')}
          </p>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-rubrik font-bold text-[28px] text-white">1 009 kr</p>
              <p className="font-text text-[13px] text-orange-100">12 kg · 84 kr/kg</p>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-white hover:bg-orange-50 transition-colors font-rubrik font-bold text-[14px] text-orange-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <ShoppingCart size={16} /> {t('dash.shopNow')}
            </Link>
          </div>
        </div>
        <div className="w-80 bg-orange-300 flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&q=80"
            alt="Golden Retriever"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── 2. Category quick-links ─────────────────────────────────────── */}
      <section className="grid grid-cols-4 gap-4">
        {categories.map(c => (
          <Link
            key={c.label}
            to={c.route}
            className={`flex flex-col items-center gap-2.5 py-5 min-h-[44px] rounded-2xl border ${c.bg} ${c.border} hover:shadow-md transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300`}
          >
            <c.Icon size={28} className={c.ic} />
            <span className={`font-rubrik font-bold text-[14px] ${c.text}`}>{c.label}</span>
          </Link>
        ))}
      </section>

      {/* ── 3. Popular Products ─────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-rubrik font-bold text-[22px] text-grey-900">{t('dash.popularProducts')}</h2>
          <Link
            to="/shop"
            className="flex items-center gap-1 min-h-[44px] font-rubrik font-bold text-[13px] text-orange-500 hover:text-orange-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('dash.viewAll')} <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md transition-shadow border border-grey-200">
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded-full font-rubrik font-bold text-[10px] ${p.badgeColor}`}>
                  {p.badge}
                </span>
                <span className={`px-2 py-0.5 rounded-full font-rubrik font-bold text-[10px] ${p.categoryColor}`}>
                  {p.category}
                </span>
              </div>
              <div className="h-28 bg-orange-50 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={p.img} alt={p.name} className="w-full h-full object-contain p-2" onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
              </div>
              <div className="space-y-1 flex-1">
                <p className="font-text text-[11px] text-grey-500">{p.brand}</p>
                <p className="font-rubrik font-bold text-[13px] text-grey-900 leading-snug">{p.name}</p>
                <p className="font-text text-[11px] text-grey-500">{p.desc}</p>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <Stars rating={p.rating} />
                  <span className="font-text text-[11px] text-grey-500">({p.reviews})</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <p className="font-rubrik font-bold text-[17px] text-grey-900">{p.price}</p>
                  {p.oldPrice && (
                    <p className="font-text text-[11px] text-grey-500 line-through">{p.oldPrice}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {}}
                  aria-label={t('dash.addToCartAria', { name: p.name })}
                  className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors text-white font-rubrik font-bold text-[12px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <ShoppingCart size={13} /> {t('dash.addToCart')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Pet Insurance ────────────────────────────────────────────── */}
      <section className="bg-white rounded-2xl p-8 space-y-6 border border-grey-200">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-orange-400" />
              <h2 className="font-rubrik font-bold text-[22px] text-grey-900">{t('dash.petInsurance')}</h2>
            </div>
            <p className="font-text text-[14px] text-grey-500 max-w-md">
              {t('dash.insuranceDesc')}
            </p>
          </div>
          <Link
            to="/costs/insurance"
            className="flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl border border-orange-200 font-rubrik font-bold text-[13px] text-orange-500 hover:bg-orange-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('dash.exploreInsurance')} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {insurancePlans.map(plan => (
            <div key={plan.name} className={`rounded-xl p-5 space-y-4 ${plan.cardStyle}`}>
              <div className="flex items-center justify-between">
                <p className="font-rubrik font-bold text-[16px] text-grey-900">{plan.name}</p>
                <span className={`px-2.5 py-1 rounded-full font-rubrik font-bold text-[11px] ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
              </div>
              <p className="font-rubrik font-bold text-[22px] text-grey-900">{plan.price}</p>
              <p className="font-text text-[13px] text-grey-500">{plan.highlight}</p>
              <ul className="space-y-1.5">
                {plan.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2 font-text text-[13px] text-grey-700">
                    <span className="text-green-600">&#10003;</span> {perk}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {}}
                className={`w-full py-2.5 min-h-[44px] rounded-lg font-rubrik font-bold text-[13px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 ${plan.btnStyle}`}
              >
                {t('dash.getQuote')}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Food & Nutrition ─────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Salad size={20} className="text-green-600" />
            <h2 className="font-rubrik font-bold text-[22px] text-grey-900">{t('dash.foodNutrition')}</h2>
          </div>
          <Link
            to="/nutrition"
            className="flex items-center gap-1 min-h-[44px] font-rubrik font-bold text-[13px] text-orange-500 hover:text-orange-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('dash.viewNutritionAdvice')} <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {nutritionArticles.map(a => (
            <div key={a.title} className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow border border-grey-200">
              <div className="h-24 bg-green-50 overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <span className="inline-block px-2 py-0.5 rounded-full bg-green-50 font-rubrik font-bold text-[10px] text-green-700">
                  {a.tag}
                </span>
                <p className="font-rubrik font-bold text-[14px] text-grey-900 leading-snug">{a.title}</p>
                <p className="font-text text-[12px] text-grey-500 leading-relaxed">{a.desc}</p>
                <Link
                  to="/nutrition"
                  className="flex items-center gap-1 min-h-[44px] font-rubrik font-bold text-[12px] text-orange-500 hover:text-orange-600 transition-colors pt-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  {t('dash.readMore')} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Community ────────────────────────────────────────────────── */}
      <section className="bg-orange-400 rounded-2xl p-8 flex gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <MessageCircle size={20} className="text-orange-100" />
            <h2 className="font-rubrik font-bold text-[22px] text-white">{t('dash.community')}</h2>
          </div>
          <p className="font-text text-[15px] text-orange-50 max-w-xs">
            {t('dash.communityDesc')}
          </p>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-white hover:bg-orange-50 transition-colors font-rubrik font-bold text-[14px] text-orange-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('dash.joinCommunity')} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="flex-1 space-y-3">
          {communityPosts.map((post, i) => (
            <div key={i} className="bg-white/15 rounded-xl px-4 py-3 space-y-1.5">
              <div className="flex items-center gap-2">
                <img src={post.avatar} alt={post.user} className="w-7 h-7 rounded-full object-cover shrink-0" />
                <p className="font-rubrik font-bold text-[13px] text-white">{post.user}</p>
                <p className="font-text text-[11px] text-orange-100 ml-auto">{post.time}</p>
              </div>
              <p className="font-text text-[13px] text-orange-50 leading-relaxed">{post.content}</p>
              <p className="font-text text-[11px] text-orange-100">&#10084; {post.likes} {t('dash.likes')}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-4" />
    </div>
  )
}
