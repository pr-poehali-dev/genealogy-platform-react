import { Person } from "@/types/person";
import { useState } from "react";
import Icon from "@/components/ui/icon";

interface TreeNodeProps {
  person: Person;
  onSelect: (person: Person) => void;
  isSelected?: boolean;
}

const TreeNode = ({ person, onSelect, isSelected }: TreeNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!person) return null;

  const getInitials = () => {
    if (!person.name) return "?";
    const nameParts = person.name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`;
    }
    return person.name.substring(0, 2);
  };

  const getGenderGradient = () => {
    if (person.gender === "male") {
      return "from-blue-400 via-blue-500 to-blue-600";
    } else if (person.gender === "female") {
      return "from-pink-400 via-pink-500 to-pink-600";
    }
    return "from-purple-400 via-purple-500 to-purple-600";
  };

  return (
    <div
      className="flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative cursor-pointer transition-all duration-500 ease-out transform 
          ${isHovered ? "scale-110 -translate-y-2" : "scale-100"} 
          ${isSelected ? "scale-105" : ""}`}
        onClick={() => onSelect(person)}
        role="button"
        tabIndex={0}
        aria-label={`Выбрать ${person.name || "персону"}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onSelect(person);
          }
        }}
      >
        {/* Эффект свечения */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${getGenderGradient()} 
            opacity-0 blur-xl transition-all duration-500 
            ${isHovered || isSelected ? "opacity-30 scale-125" : "opacity-0"}`}
        />

        {/* Основная карточка */}
        <div
          className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${getGenderGradient()} 
            p-0.5 shadow-2xl transition-all duration-500 
            ${isSelected ? "ring-4 ring-white/50 shadow-purple-500/25" : ""} 
            ${isHovered ? "shadow-3xl" : ""}`}
        >
          <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            {person.photoUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={person.photoUrl}
                  alt={person.name || "Фото персоны"}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
                  }}
                />
                {/* Overlays для статуса */}
                {person.birthYear && (
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={12} className="text-white" />
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center p-2 flex flex-col items-center justify-center h-full">
                <div
                  className={`text-lg font-bold bg-gradient-to-r ${getGenderGradient()} bg-clip-text text-transparent mb-1`}
                >
                  {getInitials()}
                </div>
                {person.birthYear && (
                  <div className="text-xs text-muted-foreground font-medium">
                    {person.birthYear}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Индикатор пола */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
          {person.gender === "male" ? (
            <Icon name="User" size={12} className="text-blue-600" />
          ) : person.gender === "female" ? (
            <Icon name="UserX" size={12} className="text-pink-600" />
          ) : (
            <Icon name="Users" size={12} className="text-purple-600" />
          )}
        </div>

        {/* Имя под кружком */}
        {person.name && (
          <div
            className={`mt-3 text-center max-w-[140px] transition-all duration-300 
            ${isHovered ? "transform scale-105" : ""}`}
          >
            <p
              className={`text-sm font-semibold truncate transition-colors duration-300 
              ${isSelected ? "text-primary" : "text-foreground"} 
              ${isHovered ? "text-primary/80" : ""}`}
              title={person.name}
            >
              {person.name}
            </p>
            {person.birthYear && person.deathYear && (
              <p className="text-xs text-muted-foreground mt-1">
                {person.birthYear}—{person.deathYear}
              </p>
            )}
          </div>
        )}

        {/* Анимированные частицы при hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${getGenderGradient()} rounded-full 
                  animate-ping opacity-75`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 80}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNode;
