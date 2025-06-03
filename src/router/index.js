import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InicioView from "../views/InicioView.vue";
import SobreView from "../views/SobreView.vue";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";
import CadastroProdutoView from "../views/CadastroProdutoView.vue";
import BuscaCodigoView from "../views/BuscaCodigoView.vue";
import ProdutoDetalheView from "../views/ProdutoDetalheView.vue";
import PedidosView from "../views/PedidosView.vue";
import ProdutosListagemView from "../views/ProdutosListagemView.vue";
import PedidoDetalheView from "../views/PedidoDetalheView.vue";
//import ProdutoCadastroCodeView from "../views/CadastroProdutoView.vue";
//import ProdutoBuscaView from "../views/ProdutoBuscaView.vue";
//import ProdutoCadastroView from "../views/ProdutoCadastroView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/inicio",
    name: "inicio",
    component: InicioView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: SobreView,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: CadastroView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/produtos/cadastro",
    name: "produtos",
    component: CadastroProdutoView
  },
  {
    path: "/listagem",
    name: "produtoListagem",
    component: ProdutosListagemView,
  },
  {
    path: "/busca/codigo",
    name: "busca",
    component: BuscaCodigoView
  },
  {
    path: "/produtos/detalhe/:id",
    name: "produtoDetalhe",
    component: ProdutoDetalheView,
    // props: true,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView
  },
  {
    path: "/detalhes/pedido/:id",
    name: "pedidoDetelhe",
    component: PedidoDetalheView
  },
  // {
  //   path: "/busca/codigo",
  //   name: "produtoBusca",
  //   component: ProdutoBuscaView,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

