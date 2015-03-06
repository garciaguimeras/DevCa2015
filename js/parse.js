/**
  Initiatives:
    name, country, leader, type, date, url (strings)

  Stakeholders:
    name, country, type, area, url (strings)
    size (int)
    initiatives (lista de ref a iniciativas {name, role})
    
  - Para agregar iniciativas
    addInitiative(name, country, leader, type, date, url)

  - Para consultar iniciativas (consulta simple por un solo campo)
    getInitiatives(category, value, onResult)
    (category es el nombre del campo, value el valor buscado, onResult la funcion donde se devuelve el resultado)

  - Para agregar stakeholders
    addStakeholder(name, country, type, area, url)

  - Para agregar el tamanno del stakeholder
    updateStakeholderSize(name, size)
    (name es el nombre del stakeholder, size el tamanno)

  - Para agregar una iniciativa a un stakeholder (como referencia usando el nombre de la iniciativa)
    updateStakeholderInitiatives(name, initName, initRole)
    (name es el nombre del stakeholder, initName e initRole son el nombre de la iniciativa y el role que juega en ella)

  - Para consultar stakeholders (consulta simple por un solo campo)
    getStakeholders(category, value, onResult)
    (category es el nombre del campo, value el valor buscado, onResult la funcion donde se devuelve el resultado)

    Los ejemplos estan en test_parse.html.
    La bd esta en el sitio https://www.parse.com/, en una app creada con mi usuario con el nombre DevCA
    Usando los datos de Parse.initialize se deben conectar a ella sin problemas (ver el final del fichero)

*/ 
function addInitiative_json(json)
{
    var Initiative = Parse.Object.extend("Initiative");
    var initiative = new Initiative();
    initiative.save(json);
}

function addInitiative(name, country, leader, type, date, url) {
    obj = {
        country: country,
        name: name,
        leader: leader,
        type: type,
        date: date,
        url: url
    };
    addInitiative_json(obj);
}

function getInitiatives(category, value, onResult) {

    var Initiative = Parse.Object.extend("Initiative");
    var query = new Parse.Query(Initiative);
    query.equalTo(category, value);
    query.find({
        success: function(results) {
            onResult(results);
        },
        error: function(error) {
            onResult(null);
      }
    });
}

function addStakeholder_json(json)
{
    var Stakeholder = Parse.Object.extend("Stakeholder");
    var stakeholder = new Stakeholder();
    stakeholder.save(json);
}

function addStakeholder(name, country, type, area, url) {
    obj = {
        country: country,
        name: name,
        type: type,
        area: area,
        url: url,
        size: 0,
        initiatives: []
    };
    addStakeholder_json(obj);
}

function getStakeholders(category, value, onResult) {

    var Stakeholder = Parse.Object.extend("Stakeholder");
    var query = new Parse.Query(Stakeholder);
    query.equalTo(category, value);
    query.find({
        success: function(results) {
            onResult(results);
        },
        error: function(error) {
            onResult(null);
      }
    });
}

function updateStakeholderSize(name, size) {

    getStakeholders("name", name, function(results) {
        
        if (results != null) {
            var obj = results[0];
            obj.set("size", size);
            obj.save();
        }

    });

}

function updateStakeholderInitiatives(name, initName, initRole) {

    getStakeholders("name", name, function(results) {
        
        if (results != null) {
            var obj = results[0];
            var jsonObj = {
                name: initName,
                role: initRole
            };
            obj.add("initiatives", jsonObj);
            obj.save();
        }

    });

}

Parse.initialize("bNH0xetTpMrLhigBu3r5VOJPpVKTpKKSkwwajZ4G", "ame2uhQbkWuvJcOj9OAU7tTEUKqbutOMZyYTvKZI");
