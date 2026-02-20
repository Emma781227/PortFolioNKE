import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h1 className="text-5xl font-extrabold">404</h1>
            <p className="mt-4 text-xl text-neutral-300">Page non trouvée</p>
            <p className="mt-2 text-neutral-400">Désolé, la ressource demandée est introuvable.</p>

            <div className="mt-8">
                <Link href="/fr" className="btn-primary">
                    Retour à l&apos;accueil
                </Link>
            </div>
        </main>
    );
}
