let cy2_mrp = cytoscape({
  container: document.getElementById('graph2-mrp'),
  elements: data_mrp.elements,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'black',
        'width' : 40,
        'height': 40
      }
    },
    {
      selector: 'edge',
      style: {
        'control-point-distances': 0,
        'control-point-weights': 0.5,
        'edge-distances': 'node-position',
        'curve-style': 'unbundled-bezier'
      }
    },
    {
        selector: 'node.selected',
        style: {
            'background-color': 'green'
        }
    },
    {
        selector: 'node.highlight',
        style: {
            'background-color': 'orange'
        }
    },
    {
        selector: 'node.highlightRight',
        style: {
            'background-color': 'blue'
        }
    },
    {
        selector: 'node.highlightLeft',
        style: {
            'background-color': 'red'
        }
    },
    {
        selector: 'node.semitransp',
        style:{ 'opacity': '0.5' }
    },
    {
        selector: 'edge.highlight',
        style: { 'mid-target-arrow-color': '#FFF', lineColor: 'blue' }
    },
    {
        selector: 'edge.semitransp',
        style:{ 'opacity': '0.2' }
    }
  ],
  layout: {
    name: 'preset',
    fit: true,
    positions: function(node){return node._private.data.position6}
  }
});

cy2_mrp.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy2_mrp);
});
cy2_mrp.on('mouseout', 'node', function(e){
  dehighlight(cy2_mrp);
});

cy2_mrp.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy2_mrp.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});


var cytoEventHandler = function(event) {
  if(event.currentSlide.id === 'graph2_mrp') {
    cy2_mrp.zoom(1.65)
    cy2_mrp.center()
  }
  else if (event.currentSlide.id == 'graph2-mrp') {
  }
}



Reveal.addEventListener('slidechanged', cytoEventHandler);