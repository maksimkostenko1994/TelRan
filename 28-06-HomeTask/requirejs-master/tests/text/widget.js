define("widget",
  ["28-06-HomeTask/requirejs-master/tests/text/subwidget", "text!widget.html"],
  function(subwidget, template) {
    return {
      subWidgetName: subwidget.name,
      subWidgetTemplate: subwidget.template,
      subWidgetTemplate2: subwidget.template2,
      template: template
    };
  }
);
