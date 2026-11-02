import { useEffect } from 'react';
import { Navbar } from '@/sections/Navbar';
import { Footer } from '@/sections/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

const CONTACT_EMAIL = 'contato@leidasaudemental.com.br';
const LAST_UPDATED = '25 de outubro de 2026';

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: 'Política de Privacidade | Lei da Saúde Mental',
    description: 'Como o site leidasaudemental.com.br coleta, usa e protege informações dos visitantes, em conformidade com a LGPD.',
    path: '/privacidade',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <article className="prose prose-lg max-w-none prose-headings:text-[#1F2937] prose-a:text-[#4A7C59]">
          <h1>Política de Privacidade</h1>
          <p className="text-sm text-[#6B7280]">Última atualização: {LAST_UPDATED}</p>

          <p>
            Esta Política de Privacidade descreve como o site <strong>leidasaudemental.com.br</strong>{' '}
            coleta, usa e protege informações dos visitantes, em conformidade com a Lei Geral de
            Proteção de Dados (Lei nº 13.709/2018 – LGPD).
          </p>

          <h2>1. Dados coletados</h2>
          <ul>
            <li>
              <strong>Dados de navegação:</strong> páginas visitadas, tempo de permanência, tipo de
              dispositivo, navegador, localização aproximada e origem do acesso, coletados de forma
              agregada pelo Google Analytics.
            </li>
            <li>
              <strong>Cookies de publicidade:</strong> identificadores usados pelo Google AdSense para
              exibir e medir anúncios.
            </li>
            <li>
              <strong>Dados fornecidos por você:</strong> informações que você nos envia
              voluntariamente, por exemplo ao entrar em contato por e-mail.
            </li>
          </ul>

          <h2>2. Cookies e publicidade</h2>
          <p>
            Este site exibe anúncios do Google AdSense. Fornecedores terceiros, incluindo o Google,
            usam cookies para veicular anúncios com base em visitas anteriores do usuário a este e a
            outros sites. O uso de cookies de publicidade pelo Google permite que ele e seus parceiros
            veiculem anúncios com base nessas visitas.
          </p>
          <p>
            Você pode desativar a publicidade personalizada nas{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Configurações de anúncios do Google
            </a>{' '}
            e saber mais em{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              Como o Google usa cookies em publicidade
            </a>
            . Outros fornecedores podem ser desativados em{' '}
            <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>
            .
          </p>

          <h2>3. Consentimento</h2>
          <p>
            Utilizamos o Modo de Consentimento do Google. Cookies de publicidade personalizada só são
            utilizados com o seu consentimento, que pode ser concedido ou recusado no aviso de cookies, quando exibido.
            Cookies de análise (Google Analytics) são utilizados com base no legítimo interesse para
            medir a audiência de forma agregada, exceto nas regiões em que a legislação exige
            consentimento prévio. Você pode alterar suas escolhas a qualquer momento pelo aviso de
            cookies ou pelas configurações do seu navegador.
          </p>

          <h2>4. Finalidade e base legal</h2>
          <p>
            Utilizamos os dados para medir audiência, melhorar o conteúdo, responder mensagens recebidas e exibir
            anúncios que mantêm o site gratuito. As bases legais são o consentimento (art. 7º, I, da
            LGPD) e o legítimo interesse (art. 7º, IX), conforme o caso.
          </p>

          <h2>5. Compartilhamento</h2>
          <p>
            Não vendemos dados pessoais. Os dados podem ser processados pelo Google (Analytics e
            AdSense) e por provedores de hospedagem, que atuam como operadores e podem armazenar
            informações fora do Brasil, com salvaguardas adequadas.
          </p>

          <h2>6. Seus direitos</h2>
          <p>
            Nos termos do art. 18 da LGPD, você pode solicitar confirmação de tratamento, acesso,
            correção, anonimização, portabilidade, eliminação dos dados e revogação do consentimento.
          </p>

          <h2>7. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas, escreva para{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>8. Alterações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. A data da última atualização está indicada
            no topo desta página.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
