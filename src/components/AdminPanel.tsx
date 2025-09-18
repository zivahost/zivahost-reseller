import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Settings,
  Eye,
  Edit,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const AdminPanel = () => {
  const stats = [
    { label: "Total Revenue", value: "$12,456", change: "+12.5%", trend: "up" },
    { label: "Active Orders", value: "24", change: "+8.2%", trend: "up" },
    { label: "Customers", value: "156", change: "+15.3%", trend: "up" },
    { label: "Services", value: "12", change: "0%", trend: "neutral" }
  ];

  const recentOrders = [
    { id: "#VPS-001", customer: "John Doe", service: "Linux VPS Premium", amount: "$75.00", status: "Processing", margin: "45%" },
    { id: "#VPS-002", customer: "Sarah Wilson", service: "Windows VPS Standard", amount: "$45.00", status: "Completed", margin: "38%" },
    { id: "#VPS-003", customer: "Mike Johnson", service: "Managed Linux", amount: "$95.00", status: "Pending", margin: "52%" },
    { id: "#VPS-004", customer: "Emily Chen", service: "Game Server VPS", amount: "$85.00", status: "Processing", margin: "41%" }
  ];

  const packages = [
    { name: "Linux VPS Basic", basePrice: "$8.00", yourPrice: "$12.00", margin: "50%", status: "Active" },
    { name: "Windows VPS Standard", basePrice: "$28.00", yourPrice: "$45.00", margin: "61%", status: "Active" },
    { name: "Managed Linux Premium", basePrice: "$55.00", yourPrice: "$95.00", margin: "73%", status: "Active" },
    { name: "Game Server VPS", basePrice: "$48.00", yourPrice: "$75.00", margin: "56%", status: "Inactive" }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-tech-blue/30 text-tech-blue">
            Admin Dashboard
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Complete Business Control
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Manage your VPS reseller business with comprehensive analytics, order management, and pricing controls.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-card border border-tech-blue/30 rounded-2xl p-6 shadow-card">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="bg-background/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`flex items-center space-x-1 ${
                      stat.trend === 'up' ? 'text-success' : 
                      stat.trend === 'down' ? 'text-destructive' : 'text-foreground/60'
                    }`}>
                      {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
                      {stat.trend === 'down' && <ArrowDownRight className="w-4 h-4" />}
                      <span className="text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-background/50">
              <TabsTrigger value="orders" className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Packages</span>
              </TabsTrigger>
              <TabsTrigger value="customers" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Customers</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <Card key={order.id} className="bg-background/30 border-border/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium text-foreground">{order.id}</p>
                            <p className="text-sm text-foreground/60">{order.customer}</p>
                          </div>
                          <div>
                            <p className="text-sm text-foreground">{order.service}</p>
                            <p className="text-sm text-foreground/60">Margin: {order.margin}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-semibold text-foreground">{order.amount}</p>
                            <Badge 
                              variant={order.status === 'Completed' ? 'default' : order.status === 'Processing' ? 'secondary' : 'outline'}
                              className="text-xs"
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Packages Tab */}
            <TabsContent value="packages" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">VPS Packages</h3>
                <Button variant="hero" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Package
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packages.map((pkg) => (
                  <Card key={pkg.name} className="bg-background/30 border-border/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-foreground">{pkg.name}</h4>
                        <Badge variant={pkg.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                          {pkg.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-foreground/60">Base Price:</span>
                          <span className="text-foreground">{pkg.basePrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground/60">Your Price:</span>
                          <span className="font-semibold text-foreground">{pkg.yourPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground/60">Margin:</span>
                          <span className="font-semibold text-success">{pkg.margin}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Settings className="w-3 h-3 mr-1" />
                          Config
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Customers Tab */}
            <TabsContent value="customers" className="space-y-4">
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-foreground/40 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Customer Management</h3>
                <p className="text-foreground/60 mb-4">
                  Complete customer database with service history, support tickets, and account management.
                </p>
                <Button variant="outline">
                  View Customer Demo
                </Button>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4">
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-foreground/40 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Business Analytics</h3>
                <p className="text-foreground/60 mb-4">
                  Comprehensive revenue tracking, margin analysis, and performance insights to grow your business.
                </p>
                <Button variant="outline">
                  View Analytics Demo
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-gradient-card border-border/50 text-center p-6">
            <DollarSign className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Dynamic Pricing</h3>
            <p className="text-foreground/70">
              Set custom margins from 10-200% with real-time price updates across all services.
            </p>
          </Card>
          <Card className="bg-gradient-card border-border/50 text-center p-6">
            <TrendingUp className="w-12 h-12 text-info mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Revenue Analytics</h3>
            <p className="text-foreground/70">
              Track performance with detailed reports, margin analysis, and growth insights.
            </p>
          </Card>
          <Card className="bg-gradient-card border-border/50 text-center p-6">
            <Settings className="w-12 h-12 text-warning mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Full Control</h3>
            <p className="text-foreground/70">
              Manage every aspect of your business from a single, intuitive dashboard.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;