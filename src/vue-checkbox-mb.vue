<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-4 d-flex flex-column align-center">

            <h1 class="display-2 font-weight-bold mb-3">
              Welcome to Vuetify
            </h1>

            <div class="d-flex">
              <v-checkbox
                class="d-flex"
                :v-model="datamodel"
                @change="change"
                ripple
              >
                <template v-slot:label>
                  <div class="d-flex align-center">
                    <span class="primary--text">Aceitos as </span>
                    <v-dialog :v-model="dialog" width="700">
                      <template v-slot:activator="{ on }">
                        <a v-on="on">
                          <u> Politica</u>
                        </a>
                      </template>
                      <v-card>
                        <v-card-title>TERMO DE USO</v-card-title>
                        <v-card-text>
                          <div>
                          1. Quais informações estão presentes neste documento?
                          Neste Termo de Uso, o usuário do serviço do Diário Oficial da União (DOU) disponibilizado pelo aplicativo mobile encontrará informações sobre: o funcionamento do serviço e as regras aplicáveis a ele; o arcabouço legal relacionado à prestação do serviço; as responsabilidades do usuário ao utilizar o serviço; as responsabilidades da Imprensa Nacional ao prover o serviço; informações para contato, caso exista alguma dúvida ou seja necessário atualizar informações; e o foro responsável por eventuais reclamações caso questões deste Termo de Uso tenham sido violadas.

                          2. Aceitação do Termo de Uso e Política de Privacidade
                          Ao utilizar os serviços, o usuário confirma que leu e compreendeu os Termos e Políticas aplicáveis ao serviço Diário Oficial da União (DOU) disponibilizado pelo aplicativo mobile e concorda em ficar vinculado a eles.

                          3. Definições
                          Para melhor compreensão deste documento, neste Termo de Uso e Política de Privacidade, consideram-se:

                          Internet: o sistema constituído do conjunto de protocolos lógicos, estruturado em escala mundial para uso público e irrestrito, com a finalidade de possibilitar a comunicação de dados entre terminais por meio de diferentes redes.

                          Sítios e aplicativos: sítios e aplicativos por meio dos quais o usuário acessa os serviços e conteúdos disponibilizados.

                          Usuários (ou "Usuário", quando individualmente considerado): todas as pessoas naturais que utilizarem o serviço Diário Oficial da União (DOU).

                          Leitura em texto: modo de consulta ao conteúdo do DOU que permite acesso individualizado aos atos publicados, em formato html.

                          Versão Certificada: modo de consulta ao conteúdo do DOU que permite acesso à página da edição contendo o ato pesquisado, certificada digitalmente, em formato pdf.

                          4. Quais são as leis e normativos aplicáveis a esse serviço?
                          - Decreto nº 8.777, de 11 de maio de 2016: Institui a Política de Dados Abertos do Poder Executivo federal.

                          - Decreto nº 9.215, de 29 de novembro de 2017: Dispõe sobre a publicação do Diário Oficial da União.

                          - Portaria IN/SG/PR nº 9, de 4 de fevereiro de 2021: Dispõe sobre publicação de atos no Diário Oficial da União.

                          5. Descrição do serviço
                          Com o objetivo facilitar o acesso imediato aos atos oficiais publicados no Diário Oficial da União (DOU), a Imprensa Nacional da Secretaria-Geral da Presidência da República disponibiliza gratuitamente o aplicativo DOU, que permite acesso ao conteúdo da edição do dia, busca por edições passadas e ainda: filtros de leitura por órgão e/ou tipo de ato; seleção

                          de leitura preferencial diária; possibilidade de “favoritar”, salvar no dispositivo e compartilhar as matérias; e baixar a versão em pdf.

                          6. Quais são as obrigações dos usuários que utilizam o serviço?
                          O Usuário é responsável pela reparação de todos e quaisquer danos, diretos ou indiretos (inclusive decorrentes de violação de quaisquer direitos de outros usuários, de terceiros, inclusive direitos de propriedade intelectual, de sigilo e de personalidade), que sejam causados à Imprensa Nacional, a qualquer outro Usuário, ou, ainda, a qualquer terceiro, inclusive em virtude do descumprimento do disposto nestes Termos de Uso e Política de Privacidade ou de qualquer ato praticado a partir da utilização do serviço.

                          A Imprensa Nacional não poderá ser responsabilizada pelos seguintes fatos:

                          a. Equipamento infectado ou invadido por atacantes;

                          b. Equipamento avariado no momento do consumo de serviços;

                          c. Proteção do equipamento;

                          d. Proteção das informações baseadas nos equipamentos dos usuários; e. Abuso de uso dos equipamentos dos usuários;

                          f. Monitoração clandestina do equipamento dos usuários;

                          g. Vulnerabilidades ou instabilidades existentes nos sistemas dos usuários;

                          O uso comercial das expressões utilizadas em aplicativos como marca, nome empresarial ou nome de domínio, além dos conteúdos do serviço, assim como os programas, bancos de dados, redes e arquivos estão protegidos pelas leis e tratados internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais.

                          Ao acessar o aplicativo, os usuários declaram que irão respeitar todos os direitos de propriedade intelectual e os decorrentes da proteção de marcas, patentes e/ou desenhos industriais, depositados ou registrados em, bem como todos os direitos referentes a terceiros que porventura estejam, ou estiverem de alguma forma, disponíveis no serviço. O simples acesso ao serviço não confere aos usuários qualquer direito ao uso dos nomes, títulos, palavras, frases, marcas, patentes, imagens, dados e informações, dentre outras, que nele estejam ou estiverem disponíveis.

                          A reprodução de conteúdo descritos anteriormente está proibida, salvo com prévia autorização por escrito ou caso se destinem ao uso exclusivamente pessoal e sem que em nenhuma circunstância os usuários adquiram qualquer direito sobre esses conteúdos.

                          É vedada a utilização do serviço para finalidades comerciais, publicitárias ou qualquer outra que contrarie a finalidade para a qual foi concebido, conforme definido neste documento, sob pena de sujeição às sanções cabíveis na Lei nº 9.610/1998, que protege os direitos autorais no Brasil.

                          Os visitantes e usuários assumem toda e qualquer responsabilidade, de caráter civil e/ou criminal, pela utilização indevida das informações, textos, gráficos, marcas, imagens, enfim, todo e qualquer direito de propriedade intelectual ou industrial do serviço.

                          Em nenhuma hipótese, a Imprensa Nacional será responsável pela instalação no equipamento do Usuário ou de terceiros, de códigos maliciosos (vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit, ou de quaisquer outros que venham a ser criados), em decorrência da navegação na Internet pelo usuário.

                          7. Quais são as responsabilidades da Imprensa Nacional?
                          Publicar e informar ao Usuário as futuras alterações a estes Termos de Uso e Política de Privacidade conforme o princípio da publicidade estabelecido no artigo 37, caput, da Constituição Federal.

                          Em nenhuma hipótese, a Imprensa Nacional será responsável pela instalação no equipamento do Usuário ou de terceiros, de códigos maliciosos (vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit, ou de quaisquer outros que venham a ser criados), em decorrência da navegação na Internet pelo usuário.

                          Em hipótese alguma, o serviço e seus colaboradores responsabilizam-se por eventuais danos diretos, indiretos, emergentes, especiais, imprevistos ou multas causadas, em qualquer matéria de responsabilidade, seja contratual, objetiva ou civil (inclusive negligência ou outras), decorrentes de qualquer forma de uso do serviço, mesmo que advertida a possibilidade de tais danos.

                          O usuário concorda que não usará robôs, sistemas de varredura e armazenamento de dados (como “spiders” ou “scrapers”), links escondidos ou qualquer outro recurso escuso, ferramenta, programa, algoritmo ou método coletor/extrator de dados automático para acessar, adquirir, copiar ou monitorar o serviço, sem permissão expressa por escrito do órgão.

                          Em se tratando de aplicativos em dispositivos móveis sua comercialização é expressamente proibida. Ao concordar com este Termo de Uso e utilizar o aplicativo móvel, o usuário receberá uma permissão do órgão para uso não comercial dos serviços oferecidos pelo aplicativo, o que, em nenhuma hipótese, fará dele proprietário do aplicativo móvel.

                          Caso o usuário descumpra o Termo de Uso ou a Política de Privacidade, ou seja investigado em razão de má conduta, este deverá responder legalmente por essa conduta.

                          A Imprensa Nacional poderá, quanto às ordens judiciais de pedido de informações, compartilhar informações necessárias para investigações ou tomar medidas relacionadas a atividades ilegais, suspeitas de fraude ou ameaças potenciais contra pessoas, bens ou sistemas que sustentam o serviço ou de outra forma necessária para cumprir com as obrigações legais.

                          A Imprensa Nacional se compromete a preservar a funcionalidade do serviço ou aplicativo, utilizando um layout que respeite a usabilidade e navegabilidade, facilitando a navegação sempre que possível, e exibir as funcionalidades de maneira completa, precisa e suficiente, de modo que as operações realizadas no serviço sejam claras.

                          8. Qual o contato pelo qual o usuário do serviço pode tirar suas dúvidas?
                          Caso o usuário tenha alguma dúvida sobre este Termo de Uso, ele poderá entrar em contato pelo e-mail caci@in.gov.br.

                          

                          POLÍTICA DE PRIVACIDADE
                          Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet).

                          Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.

                          9. Segurança do serviço do Diário Oficial da União disponibilizado pelo aplicativo mobile
                          Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas; os custos de aplicação; a natureza, o âmbito, o contexto e os riscos para os direitos e liberdades do usuário.

                          No entanto o serviço disponibilizado pelo aplicativo mobile se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário.

                          10. O serviço Diário Oficial da União (DOU) utiliza cookies?
                          O serviço do Diário Oficial da União disponibilizado pelo aplicativo mobile não utiliza cookies.

                          11. Este Termo de Uso pode ser alterado?
                          O editor se reserva o direito de modificar, a qualquer momento as presentes normas, especialmente para adaptá-las às evoluções do serviço Diário Oficial da União (DOU), seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.

                          Qualquer alteração e/ou atualização destes Termos de Uso e Política de Privacidade passará a vigorar a partir da data de sua publicação.

                          12. Qual o foro aplicável caso o usuário queira realizar alguma reclamação?
                          Este Termo será regido pela legislação brasileira. Qualquer reclamação ou controvérsia com base neste Termo será dirimida exclusivamente pela Justiça Federal, na seção judiciária do domicílio do usuário, por previsão do artigo 109, §§ 1º, 2º e 3º, da Constituição Federal.</div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                            text
                            @click="dialog = false"
                          >
                            Reserve
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <span class="primary--text">&</span>
                    <v-dialog width="700">
                      <template v-slot:activator="{ on }">
                        <a v-on="on">
                          <u>Termos</u>
                        </a>
                      </template>
                      <v-card>
                         <v-card-title>TERMO DE USO</v-card-title>
                        <v-card-text>
                          <div>
                        1. Quais informações estão presentes neste documento?
                        Neste Termo de Uso, o usuário do serviço do Diário Oficial da União (DOU) disponibilizado pelo aplicativo mobile encontrará informações sobre: o funcionamento do serviço e as regras aplicáveis a ele; o arcabouço legal relacionado à prestação do serviço; as responsabilidades do usuário ao utilizar o serviço; as responsabilidades da Imprensa Nacional ao prover o serviço; informações para contato, caso exista alguma dúvida ou seja necessário atualizar informações; e o foro responsável por eventuais reclamações caso questões deste Termo de Uso tenham sido violadas.

                        2. Aceitação do Termo de Uso e Política de Privacidade
                        Ao utilizar os serviços, o usuário confirma que leu e compreendeu os Termos e Políticas aplicáveis ao serviço Diário Oficial da União (DOU) disponibilizado pelo aplicativo mobile e concorda em ficar vinculado a eles.

                        3. Definições
                        Para melhor compreensão deste documento, neste Termo de Uso e Política de Privacidade, consideram-se:

                        Internet: o sistema constituído do conjunto de protocolos lógicos, estruturado em escala mundial para uso público e irrestrito, com a finalidade de possibilitar a comunicação de dados entre terminais por meio de diferentes redes.

                        Sítios e aplicativos: sítios e aplicativos por meio dos quais o usuário acessa os serviços e conteúdos disponibilizados.

                        Usuários (ou "Usuário", quando individualmente considerado): todas as pessoas naturais que utilizarem o serviço Diário Oficial da União (DOU).

                        Leitura em texto: modo de consulta ao conteúdo do DOU que permite acesso individualizado aos atos publicados, em formato html.

                        Versão Certificada: modo de consulta ao conteúdo do DOU que permite acesso à página da edição contendo o ato pesquisado, certificada digitalmente, em formato pdf.

                        4. Quais são as leis e normativos aplicáveis a esse serviço?
                        - Decreto nº 8.777, de 11 de maio de 2016: Institui a Política de Dados Abertos do Poder Executivo federal.

                        - Decreto nº 9.215, de 29 de novembro de 2017: Dispõe sobre a publicação do Diário Oficial da União.

                        - Portaria IN/SG/PR nº 9, de 4 de fevereiro de 2021: Dispõe sobre publicação de atos no Diário Oficial da União.

                        5. Descrição do serviço
                        Com o objetivo facilitar o acesso imediato aos atos oficiais publicados no Diário Oficial da União (DOU), a Imprensa Nacional da Secretaria-Geral da Presidência da República disponibiliza gratuitamente o aplicativo DOU, que permite acesso ao conteúdo da edição do dia, busca por edições passadas e ainda: filtros de leitura por órgão e/ou tipo de ato; seleção

                        de leitura preferencial diária; possibilidade de “favoritar”, salvar no dispositivo e compartilhar as matérias; e baixar a versão em pdf.

                        6. Quais são as obrigações dos usuários que utilizam o serviço?
                        O Usuário é responsável pela reparação de todos e quaisquer danos, diretos ou indiretos (inclusive decorrentes de violação de quaisquer direitos de outros usuários, de terceiros, inclusive direitos de propriedade intelectual, de sigilo e de personalidade), que sejam causados à Imprensa Nacional, a qualquer outro Usuário, ou, ainda, a qualquer terceiro, inclusive em virtude do descumprimento do disposto nestes Termos de Uso e Política de Privacidade ou de qualquer ato praticado a partir da utilização do serviço.

                        A Imprensa Nacional não poderá ser responsabilizada pelos seguintes fatos:

                        a. Equipamento infectado ou invadido por atacantes;

                        b. Equipamento avariado no momento do consumo de serviços;

                        c. Proteção do equipamento;

                        d. Proteção das informações baseadas nos equipamentos dos usuários; e. Abuso de uso dos equipamentos dos usuários;

                        f. Monitoração clandestina do equipamento dos usuários;

                        g. Vulnerabilidades ou instabilidades existentes nos sistemas dos usuários;

                        O uso comercial das expressões utilizadas em aplicativos como marca, nome empresarial ou nome de domínio, além dos conteúdos do serviço, assim como os programas, bancos de dados, redes e arquivos estão protegidos pelas leis e tratados internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais.

                        Ao acessar o aplicativo, os usuários declaram que irão respeitar todos os direitos de propriedade intelectual e os decorrentes da proteção de marcas, patentes e/ou desenhos industriais, depositados ou registrados em, bem como todos os direitos referentes a terceiros que porventura estejam, ou estiverem de alguma forma, disponíveis no serviço. O simples acesso ao serviço não confere aos usuários qualquer direito ao uso dos nomes, títulos, palavras, frases, marcas, patentes, imagens, dados e informações, dentre outras, que nele estejam ou estiverem disponíveis.

                        A reprodução de conteúdo descritos anteriormente está proibida, salvo com prévia autorização por escrito ou caso se destinem ao uso exclusivamente pessoal e sem que em nenhuma circunstância os usuários adquiram qualquer direito sobre esses conteúdos.

                        É vedada a utilização do serviço para finalidades comerciais, publicitárias ou qualquer outra que contrarie a finalidade para a qual foi concebido, conforme definido neste documento, sob pena de sujeição às sanções cabíveis na Lei nº 9.610/1998, que protege os direitos autorais no Brasil.

                        Os visitantes e usuários assumem toda e qualquer responsabilidade, de caráter civil e/ou criminal, pela utilização indevida das informações, textos, gráficos, marcas, imagens, enfim, todo e qualquer direito de propriedade intelectual ou industrial do serviço.

                        Em nenhuma hipótese, a Imprensa Nacional será responsável pela instalação no equipamento do Usuário ou de terceiros, de códigos maliciosos (vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit, ou de quaisquer outros que venham a ser criados), em decorrência da navegação na Internet pelo usuário.

                        7. Quais são as responsabilidades da Imprensa Nacional?
                        Publicar e informar ao Usuário as futuras alterações a estes Termos de Uso e Política de Privacidade conforme o princípio da publicidade estabelecido no artigo 37, caput, da Constituição Federal.

                        Em nenhuma hipótese, a Imprensa Nacional será responsável pela instalação no equipamento do Usuário ou de terceiros, de códigos maliciosos (vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit, ou de quaisquer outros que venham a ser criados), em decorrência da navegação na Internet pelo usuário.

                        Em hipótese alguma, o serviço e seus colaboradores responsabilizam-se por eventuais danos diretos, indiretos, emergentes, especiais, imprevistos ou multas causadas, em qualquer matéria de responsabilidade, seja contratual, objetiva ou civil (inclusive negligência ou outras), decorrentes de qualquer forma de uso do serviço, mesmo que advertida a possibilidade de tais danos.

                        O usuário concorda que não usará robôs, sistemas de varredura e armazenamento de dados (como “spiders” ou “scrapers”), links escondidos ou qualquer outro recurso escuso, ferramenta, programa, algoritmo ou método coletor/extrator de dados automático para acessar, adquirir, copiar ou monitorar o serviço, sem permissão expressa por escrito do órgão.

                        Em se tratando de aplicativos em dispositivos móveis sua comercialização é expressamente proibida. Ao concordar com este Termo de Uso e utilizar o aplicativo móvel, o usuário receberá uma permissão do órgão para uso não comercial dos serviços oferecidos pelo aplicativo, o que, em nenhuma hipótese, fará dele proprietário do aplicativo móvel.

                        Caso o usuário descumpra o Termo de Uso ou a Política de Privacidade, ou seja investigado em razão de má conduta, este deverá responder legalmente por essa conduta.

                        A Imprensa Nacional poderá, quanto às ordens judiciais de pedido de informações, compartilhar informações necessárias para investigações ou tomar medidas relacionadas a atividades ilegais, suspeitas de fraude ou ameaças potenciais contra pessoas, bens ou sistemas que sustentam o serviço ou de outra forma necessária para cumprir com as obrigações legais.

                        A Imprensa Nacional se compromete a preservar a funcionalidade do serviço ou aplicativo, utilizando um layout que respeite a usabilidade e navegabilidade, facilitando a navegação sempre que possível, e exibir as funcionalidades de maneira completa, precisa e suficiente, de modo que as operações realizadas no serviço sejam claras.

                        8. Qual o contato pelo qual o usuário do serviço pode tirar suas dúvidas?
                        Caso o usuário tenha alguma dúvida sobre este Termo de Uso, ele poderá entrar em contato pelo e-mail caci@in.gov.br.

                        

                        POLÍTICA DE PRIVACIDADE
                        Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet).

                        Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.

                        9. Segurança do serviço do Diário Oficial da União disponibilizado pelo aplicativo mobile
                        Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas; os custos de aplicação; a natureza, o âmbito, o contexto e os riscos para os direitos e liberdades do usuário.

                        No entanto o serviço disponibilizado pelo aplicativo mobile se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário.

                        10. O serviço Diário Oficial da União (DOU) utiliza cookies?
                        O serviço do Diário Oficial da União disponibilizado pelo aplicativo mobile não utiliza cookies.

                        11. Este Termo de Uso pode ser alterado?
                        O editor se reserva o direito de modificar, a qualquer momento as presentes normas, especialmente para adaptá-las às evoluções do serviço Diário Oficial da União (DOU), seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.

                        Qualquer alteração e/ou atualização destes Termos de Uso e Política de Privacidade passará a vigorar a partir da data de sua publicação.

                        12. Qual o foro aplicável caso o usuário queira realizar alguma reclamação?
                        Este Termo será regido pela legislação brasileira. Qualquer reclamação ou controvérsia com base neste Termo será dirimida exclusivamente pela Justiça Federal, na seção judiciária do domicílio do usuário, por previsão do artigo 109, §§ 1º, 2º e 3º, da Constituição Federal.</div>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
              </v-checkbox>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import {
    VRow,
    VCol,
    VDialog,
    VBtn,
    VCheckbox,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VApp,
    VMain,
    VContainer,
  } from "vuetify/lib";

  export default {
    name: 'VueModalMb',
    
    components: {
      VRow,
      VCol,
      VDialog,
      VBtn,
      VCheckbox,
      VCard,
      VCardTitle,
      VCardText,
      VCardActions,
      VApp,
      VMain,
      VContainer
    },

    data() {
      return {
        internalDialog: this.dialog
      }
    },

    props: {
      datamodel: {
        Type: Object
      },
      dialog: {
        Type: Boolean,
        default: false
      },
      change: {
        type: Function
      }
    },

    methods: {
      openDialog() {
        this.internalDialog = !this.internalDialog
      },
      change($event) {
        console.log('>>>>', $event)
        this.$emit('change', $event)
      }
    }
  }
</script>

