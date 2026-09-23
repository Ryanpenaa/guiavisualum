import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Gauge,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const showcase = [
  {
    title: "Higienização interna",
    subtitle: "Aprenda a limpar áreas internas com mais cuidado, acabamento e percepção de valor.",
    image: "/lavajato/higienizacao-interna.webp",
  },
  {
    title: "Geral detalhada",
    subtitle: "Veja como fazer uma lavagem mais detalhada, com atenção aos pontos que mais chamam atenção no resultado final.",
    image: "/lavajato/geral-detalhada.webp",
  },
  {
    title: "Lavagem de motor",
    subtitle: "Entenda os cuidados, a forma correta de aplicação e como executar o processo com mais segurança.",
    image: "/lavajato/lavagem-motor.webp",
  },
  {
    title: "Vitrificação",
    subtitle: "Conheça um serviço que agrega valor e melhora a apresentação e proteção do veículo.",
    image: "/lavajato/vitrificacao.webp",
  },
  {
    title: "Produto e diluição",
    subtitle: "Aprenda o que usar, como usar e como fazer a diluição correta para evitar desperdício.",
    image: "/lavajato/produto-diluicao.webp",
  },
];

const featureItems = [
  { icon: Wrench, title: "Equipamento", desc: "Entenda o que é realmente útil para começar." },
  { icon: Droplets, title: "Processo", desc: "Tenha uma sequência clara do início ao acabamento." },
  { icon: Gauge, title: "Preço", desc: "Aprenda a pensar em custo, tempo e valor percebido." },
];

const modules = [
  ["01", "Começando do zero", "O básico para iniciar com estrutura simples e sem comprar coisa desnecessária."],
  ["02", "Produtos e diluições", "Como entender função, uso e diluição para evitar desperdício e retrabalho."],
  ["03", "Lavagem simples", "Um processo organizado para serviços rápidos e recorrentes."],
  ["04", "Lavagem completa", "Etapas para uma entrega mais detalhada e com maior percepção de valor."],
  ["05", "Interior do veículo", "Painel, plásticos, carpetes, bancos e pontos que o cliente realmente observa."],
  ["06", "Rodas e acabamento", "Cuidados com rodas, pneus, caixas de roda e finalização do serviço."],
  ["07", "Precificação", "Como pensar no preço do serviço sem simplesmente copiar concorrentes."],
  ["08", "Seu lava-jato", "Como começar pequeno, atender os primeiros clientes e evoluir a estrutura."],
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
      <section className="relative isolate min-h-[92vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080d] via-[#05080d]/90 to-[#05080d]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b11] via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col px-5 pb-14 pt-6 sm:px-8 lg:px-12">
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

          <div className="flex flex-1 items-center py-14">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#138cff]/30 bg-[#138cff]/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-[#66baff]">
                <Sparkles className="size-4" />
                Método prático, gravado em lava-jato de verdade
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-.04em] sm:text-6xl lg:text-7xl">
                Aprenda a lavar carros do jeito certo e transforme isso em uma
                <span className="text-[#229cff]"> habilidade que pode gerar renda.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-xl">
                Veja na prática como organizar a lavagem, escolher produtos, fazer diluições, caprichar no acabamento, cobrar pelo serviço e começar mesmo com uma estrutura simples.
              </p>

              <div className="mt-8 max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.03] p-2 shadow-2xl">
                <img
                  src="/lavajato/mockup-curso.png"
                  alt="Mockup do Curso Lavajato do Diogo"
                  className="w-full rounded-[1.35rem] object-cover"
                />
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#oferta"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#138cff] px-7 text-base font-black shadow-[0_14px_40px_rgba(19,140,255,.25)] transition hover:-translate-y-0.5 hover:bg-[#2a9bff]"
                >
                  QUERO APRENDER COM O DIOGO
                  <ArrowRight className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a0f17]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:grid-cols-4 sm:divide-y-0 sm:px-8 lg:px-12">
          {[
            ["100%", "prático"],
            ["8", "etapas principais"],
            ["Do zero", "ao serviço completo"],
            ["No celular", "onde você estiver"],
          ].map(([big, small]) => (
            <div key={big} className="px-4 py-7 text-center">
              <p className="text-xl font-black text-white sm:text-2xl">{big}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[.12em] text-white/45">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">A diferença aparece no resultado</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              O cliente percebe quando o serviço é bem feito.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Uma lavagem bem executada não depende só de água e sabão. Ela envolve processo, escolha correta dos produtos, diluição, acabamento e atenção aos detalhes. É isso que transforma uma limpeza comum em um serviço que impressiona.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Escolha e uso correto dos produtos",
                "Sequência de lavagem para reduzir retrabalho",
                "Detalhes de interior, rodas, pneus e acabamento",
                "Noção de preço, custo e percepção de valor",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#138cff]/15">
                    <Check className="size-4 text-[#3ba8ff]" />
                  </div>
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#138cff]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d141f] p-3 shadow-2xl">
              <img
                src="/lavajato/diferenca-resultado.webp"
                alt="Resultado de uma lavagem geral detalhada"
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[.15em] text-[#55b3ff]">Resultado na prática</p>
                <p className="mt-1 font-bold">O treinamento mostra o passo a passo para chegar em um acabamento que chama atenção.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="border-y border-white/10 bg-[#0a1019] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Seção especial em carrossel</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Veja os tipos de serviço que entram no treinamento.
              </h2>
              <p className="mt-4 text-white/55">
                Conheça alguns dos serviços e processos que você vai aprender ao longo do treinamento.
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Conteúdo da formação</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Um caminho simples para quem quer começar e evoluir.
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

      <section className="border-y border-white/10 bg-gradient-to-b from-[#0a1019] to-[#080c12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-28">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=700&q=85"
                  alt=""
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=700&q=85"
                  alt=""
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-10">
            <p className="text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Comece com o que você tem</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Você não precisa montar uma megaestrutura antes de aprender.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Primeiro entenda o serviço. Depois organize o básico, faça seus primeiros trabalhos e melhore a estrutura conforme a demanda aparecer.
            </p>

            <div className="mt-8 grid gap-4">
              {featureItems.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#138cff]/10 text-[#36a7ff]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-1 text-sm text-white/50">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="rounded-[2rem] border border-[#168fff]/20 bg-gradient-to-br from-[#0d1724] via-[#0a111b] to-[#07101b] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#138cff]/10 px-4 py-2 text-sm font-bold text-[#56b3ff]">
                <BadgeCheck className="size-4" />
                Treinamento feito para iniciantes
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                Não queremos que você decore uma lista de produtos.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
                A ideia é você entender o raciocínio do serviço: olhar o carro, identificar o que precisa ser feito e saber qual etapa vem depois.
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm font-black uppercase tracking-[.14em] text-white/40">Ao terminar, você terá uma base para:</p>
              <div className="mt-5 space-y-3">
                {[
                  "Lavar com mais organização",
                  "Escolher melhor os produtos",
                  "Reduzir desperdícios",
                  "Melhorar acabamento",
                  "Cobrar com mais lógica",
                  "Começar a atender clientes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="size-5 text-[#36a7ff]" />
                    <span className="font-semibold text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="relative overflow-hidden border-t border-white/10 bg-[#05080d] py-20 lg:py-28">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#138cff]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto inline-flex items-center gap-1 text-[#ffc95c]">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-[.18em] text-[#2aa3ff]">Lavajato do Diogo</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Aprenda uma habilidade prática que você pode começar a usar no próximo carro.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
            Acesso às aulas online, conteúdo prático e uma trilha pensada para quem quer sair do improviso e entender o serviço de verdade.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center"> 
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b111a] p-3 shadow-2xl">
              <div className="absolute -inset-10 bg-[#138cff]/10 blur-3xl" />
              <img
                src="/lavajato/mockup-curso.png"
                alt="Mockup do Curso Lavajato do Diogo"
                className="relative w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#0b111a] p-6 text-left shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-bold text-white/45">Formação online</p>
                <h3 className="mt-1 text-2xl font-black">Curso Lavajato do Diogo</h3>
              </div>
              <div className="grid size-12 place-items-center rounded-2xl bg-[#138cff]">
                <Droplets />
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Aulas práticas em vídeo",
                "Do básico ao serviço completo",
                "Produtos, diluições e processos",
                "Módulo de precificação",
                "Acesso online",
                "Certificado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ShieldCheck className="size-5 shrink-0 text-[#36a7ff]" />
                  <span className="font-semibold text-white/75">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-[#138cff] px-6 text-center text-base font-black shadow-[0_14px_40px_rgba(19,140,255,.22)] transition hover:-translate-y-0.5 hover:bg-[#2a9bff]"
            >
              QUERO ENTRAR PARA O TREINAMENTO
              <ArrowRight className="size-5" />
            </a>
            <p className="mt-4 text-center text-xs text-white/35">
              Botão temporário — depois conectamos ao seu checkout.
            </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05080d] px-5 py-10 text-center text-sm text-white/35">
        <p className="font-bold text-white/55">Lavajato do Diogo</p>
        <p className="mt-2">Treinamento educacional de lavagem automotiva.</p>
      </footer>
    </main>
  );
}
