import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { ArrowUpRight } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  image: string
}

const PortfolioCard = ({ title, description, image }: ProjectProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-foreground/15 bg-background/50 backdrop-blur-sm p-0 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <div className="p-4 rounded-full bg-primary text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                <ArrowUpRight className="w-6 h-6" />
             </div>
        </div>
      </div>
      <CardHeader className="p-6 flex flex-col grow">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground/80 leading-relaxed mt-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default PortfolioCard