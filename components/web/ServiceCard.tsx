import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"

interface ServiceProps {
  title: string
  description: string
  image: string
}

const ServiceCard = ({ title, description, image }: ServiceProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-foreground/15 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 p-0 flex flex-col h-full">
      <CardHeader className="p-0 overflow-hidden aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-40" />
      </CardHeader>
      <CardContent className="p-6 relative z-10 flex flex-col grow">
        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
