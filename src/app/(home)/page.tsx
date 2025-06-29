import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">
          Facturación Electrónica Simplificada
        </h1>
        <p className="text-xl mb-8 text-fd-muted-foreground">
          MSeller ECF te ayuda a integrar la facturación electrónica en tu
          negocio, permitiéndote cumplir con los requisitos de la DGII sin
          complejidad técnica.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/docs"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Documentación
          </Link>
          <Link
            href="https://ecf.mseller.app/register"
            className="px-6 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100 transition-colors"
          >
            Registrarse
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Fácil Integración</h3>
            <p className="text-fd-muted-foreground">
              Conéctate a nuestra API y comienza a emitir facturas electrónicas
              en minutos.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Cumplimiento Garantizado
            </h3>
            <p className="text-fd-muted-foreground">
              Asegúrate de cumplir con todas las normativas de la DGII sobre
              facturación electrónica.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Soporte Especializado
            </h3>
            <p className="text-fd-muted-foreground">
              Nuestro equipo de expertos te guiará durante todo el proceso de
              implementación.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
