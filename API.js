function mapaMultiplosMarcadores(){
    let mapaMultiplosMarcadores;
    let divMapaMarcadores = document.getElementById('mapa-marcadores');
    let locais = [ 
      { 
        nome: 'IFMS',
        descricao: 'Instituto Federal de Mato Grosso do Sul - Campus Dourados',
        latitudeLongitude: { lat: -22.208694,  lng: -54.764941 }
      },
      { 
        nome: 'Lar Santa Rita',
        descricao: 'Lar Santa Rita de Dourados',
        latitudeLongitude: { lat: -22.2224646,  lng: -54.8050877 }
      },
      { 
        nome: 'Usina Velha',
        descricao: 'Usina Velha: ponto turístico de dourados',
        latitudeLongitude: { lat: -22.2104014, lng: -54.819986 }
      }
    ];  
    
    mapaMultiplosMarcadores = new google.maps.Map(divMapaMarcadores, {
      center: locais[0].latitudeLongitude, // IFMS como centro do Mapa
      zoom: 13 // zoom do mapa
    });
       
    /* Criar múltiplos marcadores */
    
    locais.forEach(function(local){
      /* Criação de um novo marcador no mapa */
      let marker = new google.maps.Marker({
        position: local.latitudeLongitude,
        map: mapaMultiplosMarcadores,
        title: local.nome
      }); 
      
      /* Conteúdo HTML que representa a janela de informações que aparece quando o marcador é selecionado. Essa estrutura HTML é padrão da API de mapas do Google */
      let conteudoJanelaInformacoes = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">'+ local.nome + '</h1>'+
              '<div id="bodyContent">'+
                '<p>' + local.descricao + '</p>'+
              '</div>'+
          '</div>';
  
       /* Instanciação de uma nova janela de informações */
      let infowindow = new google.maps.InfoWindow({
        content: conteudoJanelaInformacoes
      });
      
      /* Quando um marcador é 'clicado', a janela de informações é aberta sobre o mapa */
      marker.addListener('click', function() {
        infowindow.open(mapaMultiplosMarcadores, marker);
      });    
    });
  }
        
  /* Função para inicialização do Mapa (manter o nome initMap) */
  function initMap() {
    mapaMultiplosMarcadores();
  }