import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Instagram,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useRef } from "react";
import courseMockup from "@/assets/mockup-oficial-curso.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curso Lavajato do Diogo | Do básico ao profissional" },
      {
        name: "description",
        content:
          "Aprenda lavagem automotiva na prática: produtos, diluições, acabamento, precificação e como começar seu próprio lava-jato.",
      },
      { property: "og:title", content: "Curso Lavajato do Diogo" },
      {
        property: "og:description",
        content: "Do básico ao profissional, com aulas práticas gravadas em lava-jato de verdade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const showcase = [
  {
    title: "Higienização interna",
    subtitle: "Interior limpo, organizado e com acabamento que valoriza o serviço.",
    image: "/interior.jpg",
  },
  {
    title: "Limpeza de chassi / parte inferior",
    subtitle: "Antes e depois mostrando cuidado com áreas que muita gente ignora.",
    image: "/baixo-carro.jpg",
  },
  {
    title: "Lavagem de motor",
    subtitle: "Resultado real no cofre do motor, com limpeza e acabamento mais profissional.",
    image: "/motor.jpg",
  },
  {
    title: "Higienização de banco",
    subtitle: "Antes e depois no tecido, removendo sujeira e melhorando o aspecto.",
    image: "/banco.jpg",
  },
  {
    title: "Acabamento final",
    subtitle: "Brilho e apresentação que chamam atenção logo na entrega.",
    image: "/fusca.jpeg",
  },
  {
    title: "Lavagem com espuma",
    subtitle: "Processo visual forte e profissional que valoriza a experiência do cliente.",
    image: "/espuma.jpeg",
  },
];

const modules = [
  ["01", "Começando do zero", "O básico para iniciar sem comprar coisa desnecessária."],
  ["02", "Produtos e diluições", "Função, uso e diluição para reduzir desperdício e retrabalho."],
  ["03", "Lavagem simples", "Um processo organizado para serviços rápidos e recorrentes."],
  ["04", "Lavagem completa", "Etapas para uma entrega mais detalhada e valorizada."],
  ["05", "Interior do veículo", "Painel, plásticos, carpetes, bancos e pontos que o cliente observa."],
  ["06", "Rodas e acabamento", "Rodas, pneus, caixas de roda e finalização do serviço."],
  ["07", "Precificação", "Como pensar em custo, tempo e valor do serviço."],
  ["08", "Seu lava-jato", "Como começar pequeno e evoluir conforme os clientes aparecem."],
];

function Index() {
  const carousel = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    carousel.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070b11] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080d] via-[#05080d]/95 to-[#05080d]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b11] via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-[#138cff] shadow-[0_0_35px_rgba(19,140,255,.25)]">
                <Droplets className="size-6" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[.15em]">Lavajato</p>
                <p className="-mt-1 text-lg font-black text-[#3ca8ff]">do Diogo</p>
              </div>
            </div>

            <a
              href="#oferta"
              className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold backdrop-blur transition hover:bg-white/10 sm:inline-flex"
            >
              Ver treinamento
            </a>
          </header>

          <div className="max-w-3xl py-14 sm:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#138cff]/30 bg-[#138cff]/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-[#66baff]">
              <Sparkles className="size-4" />
              Método prático, gravado em lava-jato de verdade
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-.04em] sm:text-6xl lg:text-7xl">
              Aprenda a lavar carros do jeito certo e transforme isso em uma
              <span className="text-[#229cff]"> habilidade que pode gerar renda.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-xl">
              Aprenda processo, produtos, diluições, acabamento e precificação com aulas práticas.
            </p>

            <div className="mt-8 max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.03] p-2 shadow-2xl">
              <img
                src={courseMockup.url}
                alt="Mockup do Curso Lavajato do Diogo"
                className="w-full rounded-[1.35rem] object-cover"
              />
            </div>

            <a
              href="#oferta"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#138cff] px-7 text-base font-black shadow-[0_14px_40px_rgba(19,140,255,.25)] transition hover:-translate-y-0.5 hover:bg-[#2a9bff]"
            >
              QUERO APRENDER COM O DIOGO
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="resultados" className="border-b border-white/10 bg-[#0a1019] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Na prática</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Veja alguns dos serviços que você vai aprender.
              </h2>
              <p className="mt-4 text-white/55">
                Resultados reais do Lavajato do Diogo: interior, chassi, motor, bancos, acabamento e lavagem com espuma.
              </p>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scroll("left")}
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Voltar"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Avançar"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div
            ref={carousel}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:px-12"
          >
            {showcase.map((item, index) => (
              <article
                key={item.title}
                className="group relative min-w-[82%] snap-center overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101721] sm:min-w-[48%] lg:min-w-[31%]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <div className="absolute left-5 top-5 grid size-9 place-items-center rounded-full border border-white/15 bg-black/40 text-xs font-black backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Conteúdo da formação</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Do básico ao serviço completo.
          </h2>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {modules.map(([number, title, desc]) => (
            <div
              key={number}
              className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[.035] p-5 transition hover:border-[#138cff]/40 hover:bg-[#138cff]/[.06]"
            >
              <div className="text-2xl font-black text-[#239dff]">{number}</div>
              <div>
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1019]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Prática real", "Aulas gravadas mostrando o serviço acontecendo."],
              ["Processo claro", "Entenda a sequência do início ao acabamento."],
              ["Visão de negócio", "Aprenda também a pensar em preço e valor do serviço."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
                <Check className="size-5 text-[#36a7ff]" />
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="relative overflow-hidden bg-[#05080d] py-16 lg:py-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#138cff]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="mx-auto inline-flex items-center gap-1 text-[#ffc95c]">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Curso Lavajato do Diogo</p>
          <h2 className="mx-auto mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Comece aprendendo o processo certo.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            Aulas online, acesso pelo celular e conteúdo prático para você consultar sempre que precisar.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-[2rem] border border-white/10 bg-[#0b111a] p-6 text-left shadow-2xl sm:p-8">
            <div className="border-b border-white/10 pb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[.14em] text-white/40">Acesso ao treinamento</p>
              <p className="mt-3 text-5xl font-black tracking-tight text-white">
                R$ 47,90
              </p>
              <p className="mt-2 text-sm text-white/40">pagamento único</p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Aulas práticas em vídeo",
                "Produtos, diluições e processos",
                "Lavagem externa e interna",
                "Acabamento e vitrificação",
                "Módulo de precificação",
                "Certificado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ShieldCheck className="size-5 shrink-0 text-[#36a7ff]" />
                  <span className="font-semibold text-white/75">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.cakto.com.br/yjs66gz_1132717"
              className="mt-8 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-[#138cff] px-6 text-center text-base font-black shadow-[0_14px_40px_rgba(19,140,255,.22)] transition hover:-translate-y-0.5 hover:bg-[#2a9bff]"
            >
              QUERO ENTRAR PARA O TREINAMENTO
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05080d] px-5 py-10 text-center text-sm text-white/35">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3">
          <p className="font-bold text-white/60">Lavajato do Diogo</p>
          <a
            href="https://www.instagram.com/lavajatododiogo_pilar/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white/65 transition hover:text-[#3ca8ff]"
          >
            <Instagram className="size-4" />
            @lavajatododiogo_pilar
          </a>
          <p>Treinamento educacional de lavagem automotiva.</p>
        </div>
      </footer>
    </main>
  );
}
