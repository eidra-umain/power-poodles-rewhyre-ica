import { useLanguage } from '../i18n/LanguageContext';
import { Dog, Watch, Ribbon, UtensilsCrossed, BedDouble, Scissors } from 'lucide-react';

const categories = [
  { icon: Ribbon, name: 'Collars' },
  { icon: Watch, name: 'Trackers' },
  { icon: Dog, name: 'Leashes' },
  { icon: UtensilsCrossed, name: 'Bowls' },
  { icon: BedDouble, name: 'Beds' },
  { icon: Scissors, name: 'Grooming' },
];

export default function Shop() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-grey-100 px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-rubrik text-3xl font-bold text-gray-900">Shop</h1>
        <p className="font-text text-gray-500 mt-1">
          Everything your pet needs, delivered to your door.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
              <Icon className="w-6 h-6 text-orange-400" />
            </div>
            <span className="font-rubrik font-semibold text-gray-900">{name}</span>
            <span className="font-text text-xs bg-orange-100 text-orange-400 px-3 py-1 rounded-full">
              Coming soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
