import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, BookOpen, Users, ArrowRight, Mail, Instagram, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">ready4.love</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#newsletter" className="text-muted-foreground hover:text-primary transition-colors">
              Newsletter
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              Acerca de
            </a>
            <Button variant="outline" size="sm">
              Suscribirse
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Become the One
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Para encontrar a la persona correcta, primero debes convertirte en la persona correcta. Descubre el camino
            hacia relaciones saludables a través del crecimiento personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Comenzar mi journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Explorar contenido
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" id="about">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Tu camino hacia relaciones saludables
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Blog & Recursos</CardTitle>
                <CardDescription className="text-pretty">
                  Artículos profundos sobre salud mental, autoestima y crecimiento personal basados en evidencia
                  científica.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Newsletter Semanal</CardTitle>
                <CardDescription className="text-pretty">
                  Recibe contenido curado, ejercicios prácticos y reflexiones para tu desarrollo personal cada semana.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Comunidad</CardTitle>
                <CardDescription className="text-pretty">
                  Únete a una comunidad de personas comprometidas con su crecimiento y preparación para el amor
                  verdadero.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 bg-muted/30" id="blog">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Contenido destacado</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-balance">
                  El poder del amor propio: Base de relaciones saludables
                </CardTitle>
                <CardDescription>
                  Descubre por qué amarte a ti mismo es el primer paso hacia encontrar el amor verdadero.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                  Leer más <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-balance">Sanando heridas del pasado para amar mejor</CardTitle>
                <CardDescription>
                  Cómo procesar experiencias pasadas para crear espacio para relaciones más sanas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                  Leer más <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-balance">
                  Estableciendo límites saludables en las relaciones
                </CardTitle>
                <CardDescription>
                  Aprende a comunicar tus necesidades y mantener tu bienestar en cualquier relación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                  Leer más <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4" id="newsletter">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Únete a nuestra comunidad</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Recibe contenido exclusivo, ejercicios prácticos y el apoyo que necesitas en tu journey hacia relaciones más
            saludables.
          </p>
          <Card className="p-8 border-primary/20">
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="tu@email.com" className="flex-1" />
                <Button size="lg" className="sm:w-auto">
                  Suscribirse
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Sin spam. Cancela cuando quieras. Tu privacidad es importante para nosotros.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Historias de transformación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic text-pretty">
                  "Ready4.love me ayudó a entender que antes de buscar el amor, necesitaba sanar mis propias heridas.
                  Ahora tengo una relación increíble conmigo misma y con mi pareja."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">María</p>
                    <p className="text-sm text-muted-foreground">Lectora desde 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic text-pretty">
                  "Los artículos sobre límites saludables cambiaron completamente mi perspectiva. Aprendí a valorarme y
                  ahora atraigo personas que realmente me respetan."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">C</span>
                  </div>
                  <div>
                    <p className="font-semibold">Carlos</p>
                    <p className="text-sm text-muted-foreground">Suscriptor del newsletter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ready4.love</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Preparándote para relaciones saludables a través del crecimiento personal y la salud mental.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contenido</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    RSS Feed
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Comunidad</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Síguenos</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ready4.love. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
