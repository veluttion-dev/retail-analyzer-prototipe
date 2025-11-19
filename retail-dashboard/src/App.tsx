export default function App() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">Barrabes Analytics</div>
          <div className="sidebar-subtitle">Dashboard</div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">Resumen</div>
          <div className="nav-item">Productos</div>
          <div className="nav-item">Inventario</div>
          <div className="nav-item">Categorías</div>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <div className="header-content">
            <div>
              <h1>Barrabes Analytics</h1>
              <div className="subtitle">Resumen general y KPIs</div>
            </div>
            <div className="header-info">
              <div className="header-stat">
                <div className="label">Ventas (30d)</div>
                <div className="value">€ 124,500</div>
              </div>
              <div className="header-stat">
                <div className="label">Margen</div>
                <div className="value">27%</div>
              </div>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          <div className="filters-bar">
            <div className="filter-group">
              <div className="filter-label">Periodo</div>
              <select>
                <option>Últimos 30 días</option>
                <option>Últimos 7 días</option>
                <option>Último año</option>
              </select>
            </div>
            <div className="filter-group">
              <div className="filter-label">Canal</div>
              <select>
                <option>Online</option>
                <option>Tienda</option>
                <option>Distribuidor</option>
              </select>
            </div>
            <div style={{marginLeft: 'auto'}}>
              <button className="btn btn-primary">Actualizar</button>
            </div>
          </div>

          <div className="grid grid-3">
            <div className="card metric-card">
              <div className="metric-header">
                <div>
                  <div className="metric-title">Ingresos</div>
                  <div className="metric-value">€ 124,500</div>
                </div>
                <div className="metric-icon">💶</div>
              </div>
              <div className="metric-footer">
                <div className="metric-subtitle">Comparado con 30d previos</div>
                <div className="metric-trend">+12%</div>
              </div>
            </div>

            <div className="card metric-card">
              <div className="metric-header">
                <div>
                  <div className="metric-title">Margen Bruto</div>
                  <div className="metric-value">27%</div>
                </div>
                <div className="metric-icon">📈</div>
              </div>
              <div className="metric-footer">
                <div className="metric-subtitle">Media por producto</div>
                <div className="metric-trend">+3%</div>
              </div>
            </div>

            <div className="card metric-card">
              <div className="metric-header">
                <div>
                  <div className="metric-title">Valor stock</div>
                  <div className="metric-value">€ 2,340,000</div>
                </div>
                <div className="metric-icon">📦</div>
              </div>
              <div className="metric-footer">
                <div className="metric-subtitle">Total inventario</div>
                <div className="metric-trend">-1%</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Top productos</h2>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Nombre</th>
                    <th>Unidades</th>
                    <th>Revenue</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ESQ-001</td>
                    <td>Esquí Modelo X</td>
                    <td>210</td>
                    <td>€ 42,000</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>TRK-456</td>
                    <td>GPS Garmin inReach Mini 2</td>
                    <td>56</td>
                    <td>€ 19,600</td>
                    <td>28</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
