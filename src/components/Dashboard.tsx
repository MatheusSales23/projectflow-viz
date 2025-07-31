import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Activity, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Plus,
  Filter,
  Search
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total de Projetos",
      value: "4",
      icon: BarChart3,
      subtitle: "Atualizado",
      color: "bg-primary"
    },
    {
      title: "Atividades Ativas", 
      value: "28",
      icon: Activity,
      subtitle: "Atualizado",
      color: "bg-green-500"
    },
    {
      title: "Itens Alto Risco",
      value: "6", 
      icon: AlertTriangle,
      subtitle: "Atualizado",
      color: "bg-red-500"
    },
    {
      title: "Lead Time Médio",
      value: "69 dias",
      icon: Clock,
      subtitle: "Atualizado", 
      color: "bg-orange-500"
    },
    {
      title: "Valor Total",
      value: "R$ 559.000",
      icon: DollarSign,
      subtitle: "Atualizado",
      color: "bg-primary"
    },
    {
      title: "Projetos Concluídos",
      value: "0",
      icon: CheckCircle,
      subtitle: "Atualizado",
      color: "bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient */}
      <div className="gradient-header text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Dashboard de Projetos</h1>
          <p className="text-white/90">Gerencie seus projetos, atividades e monitore o progresso em tempo real</p>
          
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">4 Projetos Ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span className="text-sm">28 Atividades</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm">6 Alto Risco</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Navigation Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="gerenciamento">Gerenciamento</TabsTrigger>
            <TabsTrigger value="timeline">Timeline Geral</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Estatísticas Gerais</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <span className="text-primary">↗</span>
                        {stat.subtitle}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gerenciamento" className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Gerenciamento de Projetos</h2>
                  <p className="text-muted-foreground">Gerencie seus projetos, atividades e timeline</p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Projeto
                  </Button>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Atividade
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex gap-4 mb-6 p-4 bg-white rounded-lg border">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Filtros e Pesquisa</span>
                </div>
                <div className="flex-1 flex gap-2">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <input 
                      className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                      placeholder="Pesquisar projetos..."
                    />
                  </div>
                  <select className="px-3 py-2 border rounded-md text-sm">
                    <option>Todos os Status</option>
                    <option>Em Progresso</option>
                    <option>Concluído</option>
                    <option>Pendente</option>
                  </select>
                  <select className="px-3 py-2 border rounded-md text-sm">
                    <option>Todas as Prioridades</option>
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                  </select>
                  <select className="px-3 py-2 border rounded-md text-sm">
                    <option>Todos os Riscos</option>
                    <option>Alto</option>
                    <option>Médio</option>
                    <option>Baixo</option>
                  </select>
                </div>
              </div>

              {/* Projects List */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5" />
                  <span className="font-semibold">Projetos (4)</span>
                </div>

                <div className="grid gap-6">
                  {/* Project Card 1 */}
                  <Card className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">E-commerce Platform</h3>
                          <Badge variant="destructive">CRÍTICA</Badge>
                          <Badge className="bg-red-100 text-red-700">🔺 2 Alto Risco</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          Plataforma completa de e-commerce com carrinho de compras, pagamentos e gestão de produtos
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">✏️</Button>
                        <Button variant="ghost" size="sm">🗑️</Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">📅</span>
                        <span className="ml-1">31/12/2023 - 14/03/2024</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">💰</span>
                        <span className="ml-1">R$ 150.000,00</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">⏱️</span>
                        <span className="ml-1">75 dias</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">↗</span>
                        <span className="ml-1">45% completo</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">📊</span>
                        <span className="text-sm font-medium">1/7 atividades</span>
                        <span className="text-sm">👥</span>
                        <span className="text-sm">5 membros</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-sm">Início: 2024-01-01</span>
                        <span className="text-sm">Entrega: 2024-03-15</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">⚠️ Risco: HIGH</span>
                        <Button variant="outline" size="sm" className="ml-auto">👁️ Detalhes</Button>
                      </div>
                    </div>
                  </Card>

                  {/* Project Card 2 */}
                  <Card className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">Mobile App MVP</h3>
                          <Badge className="bg-orange-100 text-orange-700">HIGH</Badge>
                          <Badge className="bg-red-100 text-red-700">🔺 2 Alto Risco</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          Aplicativo mobile para gestão de tarefas e produtividade com sincronização offline
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">✏️</Button>
                        <Button variant="ghost" size="sm">🗑️</Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">📅</span>
                        <span className="ml-1">15/01/2024 - 20/03/2024</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">💰</span>
                        <span className="ml-1">R$ 89.000</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">⏱️</span>
                        <span className="ml-1">60 dias</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">↗</span>
                        <span className="ml-1">65% completo</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">📊</span>
                        <span className="text-sm font-medium">2/7 atividades</span>
                        <span className="text-sm">👥</span>
                        <span className="text-sm">4 membros</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-sm">Início: 2024-01-15</span>
                        <span className="text-sm">Entrega: 2024-03-20</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">⚠️ Risco: MEDIUM</span>
                        <Button variant="outline" size="sm" className="ml-auto">👁️ Detalhes</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5" />
                <h2 className="text-2xl font-bold">Timeline Integrada de Projetos</h2>
              </div>

              <div className="space-y-6">
                {/* Timeline Item */}
                <div className="border-l-4 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">E-commerce Platform</h3>
                      <Badge variant="secondary">Em Progresso</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      📅 31/12/2023 - 14/03/2024 • ↗ 45% completo
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <div className="font-medium">Design da Interface Principal</div>
                          <div className="text-sm text-muted-foreground">
                            📅 14/01/2024 • 👤 Maria Silva
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Concluído</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <div className="font-medium">Desenvolvimento do Carrinho de Compras</div>
                          <div className="text-sm text-muted-foreground">
                            📅 29/01/2024 • 👤 João Santos
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">Em Progresso</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <div className="font-medium">Integração com Gateway de Pagamento</div>
                          <div className="text-sm text-muted-foreground">
                            📅 09/02/2024 • 👤 Pedro Costa
                          </div>
                        </div>
                        <Badge className="bg-red-100 text-red-700">Pendente</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;