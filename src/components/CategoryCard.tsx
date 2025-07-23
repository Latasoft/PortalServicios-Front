interface CategoryCardProps {
  icon: string;
  title: string;
  href: string;
}

const CategoryCard = ({ icon, title, href }: CategoryCardProps) => {
  return (
    <a href={href} className="flex flex-col items-center group">
      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:shadow-lg transition-shadow">
        <span className="material-icons text-[#053F5C] !text-[35px] sm:!text-[40px] md:!text-[50px]">{icon}</span>
      </div>
      <h3 className="text-[#053F5C] text-xs sm:text-sm font-medium text-center">{title}</h3>
    </a>
  )
}

export default CategoryCard
