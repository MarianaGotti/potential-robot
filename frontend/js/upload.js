const API_BASE = window.location.origin + '/api';

console.log('API Base URL:', API_BASE);

// Handle file upload
const uploadForm = document.getElementById('upload-form');
if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const arquivo = document.getElementById('arquivo').files[0];
        const token = localStorage.getItem('token');
        
        if (!arquivo) {
            alert('Selecione um arquivo!');
            return;
        }
        
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descricao', descricao);
        formData.append('arquivo', arquivo);
        
        const progressDiv = document.getElementById('upload-progress');
        if (progressDiv) {
            progressDiv.style.display = 'block';
        }
        
        try {
            const response = await fetch(`${API_BASE}/uploads`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            
            const data = await response.json();
            
            if (response.ok) {
                alert('Arquivo enviado com sucesso!');
                uploadForm.reset();
                if (progressDiv) {
                    progressDiv.style.display = 'none';
                }
                window.location.href = 'perfil.html';
            } else {
                alert('Erro ao enviar arquivo: ' + (data.message || 'Erro desconhecido'));
                if (progressDiv) {
                    progressDiv.style.display = 'none';
                }
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar arquivo. Verifique se o servidor está rodando.');
            if (progressDiv) {
                progressDiv.style.display = 'none';
            }
        }
    });
}

// Load user information on profile page
async function loadUserProfile() {
    const token = localStorage.getItem('token');
    const usuarioId = localStorage.getItem('usuario_id');
    
    if (!token || !usuarioId) {
        window.location.href = 'login.html';
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/usuarios/${usuarioId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        const usuario = await response.json();
        
        const userInfoDiv = document.getElementById('user-info');
        if (userInfoDiv) {
            userInfoDiv.innerHTML = `
                <p><strong>Nome:</strong> ${usuario.nome}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
            `;
        }
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
    }
}

// Load user models on profile page
async function loadUserModels() {
    const token = localStorage.getItem('token');
    const usuarioId = localStorage.getItem('usuario_id');
    
    if (!token || !usuarioId) {
        window.location.href = 'login.html';
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/modelos?usuario_id=${usuarioId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        const modelos = await response.json();
        
        const modelsDiv = document.getElementById('user-models');
        if (modelsDiv) {
            if (modelos.length === 0) {
                modelsDiv.innerHTML = '<p>Você ainda não fez upload de nenhum modelo. <a href="upload.html">Fazer upload agora</a></p>';
                return;
            }
            
            modelsDiv.innerHTML = modelos.map(modelo => `
                <div class="model-card">
                    <div class="model-thumbnail">📦</div>
                    <div class="model-info">
                        <h3>${modelo.titulo}</h3>
                        <p>${modelo.descricao || 'Sem descrição'}</p>
                        <small>Enviado em: ${new Date(modelo.data_upload).toLocaleDateString()}</small>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Erro ao carregar modelos:', error);
    }
}

// Initialize profile page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('perfil.html')) {
        loadUserProfile();
        loadUserModels();
    }
});
