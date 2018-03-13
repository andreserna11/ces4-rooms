function getData() {
    const mysite = 'status-aad78';
    const url = `https://${mysite}.firebaseio.com/result.json`;
    const tbody = getElementById('result');
    tbody.innerHTML = '';
    
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        let status = data;
        return status.map(function (message) {
          let tr = createNode('tr'),
            tda = createNode('td'),            
            tdb = createNode('td'); 
            a = createNode('a');         
          tda.innerHTML = `${message.Status}`;
          tdb.innerHTML = `${message.Message}`;
          a.innerHTML = `SHOW`;
          a.href = "www.google.com";
          append(tr, tda);
          append(tr, tdb);
          append(tr,a);
          append(tbody,tr);
        })
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
}

function getElementById(id) {
    return document.getElementById(id);
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

getData();