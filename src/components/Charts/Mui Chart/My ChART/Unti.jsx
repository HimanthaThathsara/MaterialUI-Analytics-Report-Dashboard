 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ReactFlow, ReactFlowProvider, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";



const SankeyChart = () => {
  const nodes = [
    { id: "1", data: { label: "Output" }, position: { x: 100, y: 200 } },
    { id: "2", data: { label: "Main AC" }, position: { x: 400, y: 100 } },
    { id: "3", data: { label: "USB-C 1" }, position: { x: 400, y: 200 } },
    { id: "4", data: { label: "Secondary AC" }, position: { x: 400, y: 300 } },
    { id: "5", data: { label: "USB-A" }, position: { x: 400, y: 400 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true, label: "30 kWh" },
    { id: "e1-3", source: "1", target: "3", animated: true, label: "8 kWh" },
    { id: "e1-4", source: "1", target: "4", animated: true, label: "0 kWh" },
    { id: "e1-5", source: "1", target: "5", animated: true, label: "0 kWh" },
  ];

  return (
        <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>

        <Typography component="h2" variant="subtitle2" gutterBottom>
          Power Consumption In Volts
        </Typography>

            <Stack sx={{ justifyContent: 'space-between' }}>

              <Stack
                direction="row"
                sx={{
                  alignContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography variant="h4" component="p">
                  13,277v
                </Typography>

                <Chip size="small" color="success" label="+35%" />
                
              </Stack>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Power consumption per day for the last 30 days
              </Typography>

            </Stack>

               <ReactFlowProvider>
      <div style={{ height: 500, width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          connectionLineStyle={{ stroke: "orange", strokeWidth: 2 }}
          nodeTypes={{}} // Add custom node types if needed
          edgeTypes={{}} // Add custom edge types if needed
        >
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>

      </CardContent>
    </Card>
    

  );
}


export default SankeyChart;