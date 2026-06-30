const fs = require('fs');

const path = 'c:/Users/Aluno2/Downloads/carnaval-feminino-main/carnaval-feminino-main/admin.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Add Tabs
const tabsHTML = `
        <button 
          id="tab-cepin-btn"
          onclick="switchTab('cepin')"
          class="pb-3 text-sm font-bold border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-smooth focus:outline-none hidden"
        >
          ⚙️ Editar CEPIN
        </button>
        <button 
          id="tab-users-btn"
          onclick="switchTab('users')"
          class="pb-3 text-sm font-bold border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-smooth focus:outline-none hidden"
        >
          👥 Aprovar Usuários
        </button>
        <button 
          id="tab-settings-btn"
          onclick="switchTab('settings')"
          class="pb-3 text-sm font-bold border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-smooth focus:outline-none hidden"
        >
          🔧 Configurações
        </button>
`;
content = content.replace(/<button\s+id="tab-cepin-btn"[\s\S]*?<\/button>/, tabsHTML);

const sectionsHTML = `
    <!-- ================= TAB: USERS ================= -->
    <div id="tab-users" class="space-y-6 hidden">
      <div class="rounded-xl border border-border bg-card shadow-soft overflow-hidden">
        <div class="p-6 border-b border-border flex justify-between items-center">
          <h3 class="font-extrabold text-lg">Aprovação de Usuários</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-muted/50 text-muted-foreground font-bold uppercase tracking-wider text-xs border-b border-border">
              <tr>
                <th class="px-6 py-4">Email</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody id="users-table-body" class="divide-y divide-border">
              <!-- JS Populated -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ================= TAB: SETTINGS ================= -->
    <div id="tab-settings" class="space-y-6 hidden">
      <div class="rounded-xl border border-border bg-card shadow-soft overflow-hidden p-6">
        <h3 class="font-extrabold text-lg mb-4">Configurações de Notificação</h3>
        <form id="settings-form" class="space-y-4" onsubmit="saveSettings(event)">
          <div>
            <label class="block text-sm font-bold text-muted-foreground mb-1">E-mail para receber avisos de novos cadastros</label>
            <input type="email" id="notification-email-input" required class="w-full max-w-md px-3.5 py-2.5 border border-input rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <button type="submit" class="bg-primary hover:bg-primary/95 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-sm">
            Salvar Configurações
          </button>
        </form>
      </div>
    </div>

    <!-- ================= TAB: BLOCKS ================= -->
`;
content = content.replace(/<!-- ================= TAB: BLOCKS ================= -->/, sectionsHTML);

// 3. Unhide user/settings tab if admin
const adminShow = `
        const cepinBtn = document.getElementById('tab-cepin-btn');
        if (cepinBtn) cepinBtn.classList.remove('hidden');
        
        const usersBtn = document.getElementById('tab-users-btn');
        if (usersBtn) usersBtn.classList.remove('hidden');
        
        const settingsBtn = document.getElementById('tab-settings-btn');
        if (settingsBtn) settingsBtn.classList.remove('hidden');
`;
content = content.replace(/const cepinBtn = document.getElementById\('tab-cepin-btn'\);\s*if \(cepinBtn\) cepinBtn\.classList\.remove\('hidden'\);/, adminShow);


// 4. Update switchTab function
const newSwitchTab = `
    // Tabs navigation switcher
    function switchTab(tab) {
      const blocksTab = document.getElementById('tab-blocks');
      const eventsTab = document.getElementById('tab-events');
      const cepinTab = document.getElementById('tab-cepin');
      const usersTab = document.getElementById('tab-users');
      const settingsTab = document.getElementById('tab-settings');
      
      const blocksBtn = document.getElementById('tab-blocks-btn');
      const eventsBtn = document.getElementById('tab-events-btn');
      const cepinBtn = document.getElementById('tab-cepin-btn');
      const usersBtn = document.getElementById('tab-users-btn');
      const settingsBtn = document.getElementById('tab-settings-btn');

      blocksTab.classList.add('hidden');
      eventsTab.classList.add('hidden');
      if (cepinTab) cepinTab.classList.add('hidden');
      if (usersTab) usersTab.classList.add('hidden');
      if (settingsTab) settingsTab.classList.add('hidden');
      
      const inactiveClass = "pb-3 text-sm font-bold border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-smooth focus:outline-none";
      const activeClass = "pb-3 text-sm font-bold border-b-2 border-primary text-primary transition-smooth focus:outline-none";
      
      blocksBtn.className = inactiveClass;
      eventsBtn.className = inactiveClass;
      if (cepinBtn) cepinBtn.className = inactiveClass;
      if (usersBtn) usersBtn.className = inactiveClass;
      if (settingsBtn) settingsBtn.className = inactiveClass;

      if (tab === 'blocks') {
        blocksTab.classList.remove('hidden');
        blocksBtn.className = activeClass;
      } else if (tab === 'events') {
        eventsTab.classList.remove('hidden');
        eventsBtn.className = activeClass;
      } else if (tab === 'cepin') {
        if (cepinTab) cepinTab.classList.remove('hidden');
        if (cepinBtn) cepinBtn.className = activeClass;
        loadCepinFormValues();
      } else if (tab === 'users') {
        if (usersTab) usersTab.classList.remove('hidden');
        if (usersBtn) usersBtn.className = activeClass;
        loadUsersTable();
      } else if (tab === 'settings') {
        if (settingsTab) settingsTab.classList.remove('hidden');
        if (settingsBtn) settingsBtn.className = activeClass;
        loadSettings();
      }
    }
`;
content = content.replace(/\/\/ Tabs navigation switcher[\s\S]*?\}\s*(?=\/\/ Dynamic field creators)/, newSwitchTab);


const newFunctions = `
    async function loadUsersTable() {
      const supabase = await getSupabaseClient();
      const { data, error } = await supabase.from('perfis').select('*').order('is_approved', { ascending: true });
      if (error) {
        showToast('Erro ao carregar usuários');
        return;
      }
      
      const tbody = document.getElementById('users-table-body');
      tbody.innerHTML = '';
      data.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = \`
          <td class="px-6 py-4 font-medium">\${user.email}</td>
          <td class="px-6 py-4">
            <span class="px-2 py-1 text-xs font-bold rounded-full \${user.is_approved ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'}">
              \${user.is_approved ? 'Aprovado' : 'Pendente'}
            </span>
          </td>
          <td class="px-6 py-4 text-right">
            \${!user.is_approved ? \`<button onclick="approveUser('\${user.id}')" class="text-xs bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-primary/90 font-bold transition-smooth">Aprovar</button>\` : ''}
          </td>
        \`;
        tbody.appendChild(tr);
      });
    }

    async function approveUser(id) {
      if (!confirm('Deseja realmente aprovar este usuário?')) return;
      const supabase = await getSupabaseClient();
      const { error } = await supabase.from('perfis').update({ is_approved: true }).eq('id', id);
      if (error) {
        showToast('Erro ao aprovar: ' + error.message);
      } else {
        showToast('Usuário aprovado com sucesso! ✅');
        loadUsersTable();
      }
    }

    async function loadSettings() {
      const supabase = await getSupabaseClient();
      const { data, error } = await supabase.from('configuracoes').select('*').limit(1).single();
      if (!error && data) {
        document.getElementById('notification-email-input').value = data.notification_email;
      }
    }

    async function saveSettings(e) {
      e.preventDefault();
      const email = document.getElementById('notification-email-input').value;
      const supabase = await getSupabaseClient();
      const { data: config } = await supabase.from('configuracoes').select('id').limit(1).single();
      
      if (config) {
        const { error } = await supabase.from('configuracoes').update({ notification_email: email }).eq('id', config.id);
        if (error) showToast('Erro: ' + error.message);
        else showToast('Configurações salvas! ✅');
      }
    }
    
    // Original initAdmin functions call loadData() etc, we append to it.
`;
content = content.replace(/<\/script>\s*<\/body>/, newFunctions + "\n  </script>\n</body>");

fs.writeFileSync(path, content);
console.log("admin.html updated successfully!");
