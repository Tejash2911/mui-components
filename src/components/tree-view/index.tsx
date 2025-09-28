import { useEffect, useRef, useState } from 'react'
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { Box, IconButton, Paper, Typography, styled } from '@mui/material'
import { Tree, TreeNode } from 'react-organizational-chart'
import type { TreeNode as TreeNodeType } from './treeData'
import { treeData } from './treeData'

interface TreeViewProps {
  data?: TreeNodeType[]
  draggable?: boolean
  allowZoom?: boolean
  rootLabel?: React.ReactNode
  lineWidth?: string
  lineColor?: string
  lineBorderRadius?: string
  lineStyle?: 'solid' | 'dashed' | 'dotted'
  nodeBorderColor?: string
  nodeBackgroundColor?: string
  nodeHoverColor?: string
  showControls?: boolean
  className?: string
  style?: React.CSSProperties
  expandable?: boolean
}

const StyledNode = styled(Paper)<{
  borderColor: string
  backgroundColor: string
  hoverColor: string
}>(({ theme, borderColor, backgroundColor, hoverColor }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  display: 'inline-block',
  border: `1px solid ${borderColor}`,
  backgroundColor: backgroundColor,
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.2s ease',
  // whiteSpace: 'nowrap',
  // minWidth: 'fit-content',
  '&:hover': {
    backgroundColor: hoverColor,
    transform: 'scale(1.05)'
  }
}))

const NodeContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  minWidth: 'fit-content'
})

const TreeContainer = styled(Box)({
  width: '100%',
  height: 'calc(100vh - 52px)',
  overflow: 'hidden',
  position: 'relative'
})

const TreeWrapper = styled(Box)<{ scale: number; translateX: number; translateY: number }>(
  ({ scale, translateX, translateY }) => ({
    transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
    transformOrigin: 'center',
    transition: 'transform 0.1s ease',
    minHeight: 'calc(100vh - 52px)',
    minWidth: '100vw',
    padding: '50px'
  })
)

const TreeView: React.FC<TreeViewProps> = ({
  data = treeData,
  draggable = true,
  allowZoom = true,
  rootLabel = 'Root',
  lineWidth = '2px',
  lineColor = 'green',
  lineBorderRadius = '10px',
  lineStyle = 'solid',
  nodeBorderColor = '#ff0000',
  nodeBackgroundColor = 'inherit',
  nodeHoverColor = 'inherit',
  className,
  style,
  expandable = false
}) => {
  const [scale, setScale] = useState(1)
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!draggable) return
    if (e.button === 0) {
      // Left click only
      setIsDragging(true)
      setDragStart({
        x: e.clientX - translateX,
        y: e.clientY - translateY
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggable || !isDragging) return
    setTranslateX(e.clientX - dragStart.x)
    setTranslateY(e.clientY - dragStart.y)
  }

  const handleMouseUp = () => {
    if (!draggable) return
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (!allowZoom) return
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setScale(prev => Math.max(0.3, Math.min(3, prev * delta)))
  }

  const toggleNodeExpansion = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const generateTree = (
    node: TreeNodeType[],
    nodeBorderColor: string,
    nodeBackgroundColor: string,
    nodeHoverColor: string
  ) => {
    const handleClick = (it: TreeNodeType) => {
      console.log('clicked ', it.name)
    }

    const handleExpandClick = (e: React.MouseEvent, nodeId: string) => {
      e.stopPropagation()
      toggleNodeExpansion(nodeId)
    }

    return node?.map((it: TreeNodeType) => {
      const hasChildren = it.children && it.children.length > 0
      const isExpanded = expandedNodes.has(it.id)

      // If expandable is false, always show all nodes; avoid extra lines for leaves
      if (!expandable) {
        if (hasChildren) {
          return (
            <TreeNode
              key={it.id}
              label={
                <StyledNode
                  onClick={() => handleClick(it)}
                  borderColor={nodeBorderColor}
                  backgroundColor={nodeBackgroundColor}
                  hoverColor={nodeHoverColor}
                  elevation={1}
                >
                  <NodeContent>
                    <Typography variant='body2'>{it.name}</Typography>
                    {/* <MoreVert sx={{ width: 16, height: 16 }} /> */}
                  </NodeContent>
                </StyledNode>
              }
            >
              {generateTree(it.children, nodeBorderColor, nodeBackgroundColor, nodeHoverColor)}
            </TreeNode>
          )
        }
        return (
          <TreeNode
            key={it.id}
            label={
              <StyledNode
                onClick={() => handleClick(it)}
                borderColor={nodeBorderColor}
                backgroundColor={nodeBackgroundColor}
                hoverColor={nodeHoverColor}
                elevation={1}
              >
                <NodeContent>
                  <Typography variant='body2'>{it.name}</Typography>
                </NodeContent>
              </StyledNode>
            }
          />
        )
      }

      // If expandable is true, use expand/collapse functionality
      if (hasChildren && isExpanded) {
        return (
          <TreeNode
            key={it.id}
            label={
              <StyledNode
                onClick={() => handleClick(it)}
                borderColor={nodeBorderColor}
                backgroundColor={nodeBackgroundColor}
                hoverColor={nodeHoverColor}
                elevation={1}
              >
                <NodeContent>
                  <IconButton
                    size='small'
                    onClick={e => handleExpandClick(e, it.id)}
                    sx={{
                      padding: '2px',
                      marginRight: '4px',
                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' }
                    }}
                  >
                    {isExpanded ? <ExpandMore /> : <ChevronRight />}
                  </IconButton>
                  <Typography variant='body2'>{it.name}</Typography>
                </NodeContent>
              </StyledNode>
            }
          >
            {generateTree(it.children, nodeBorderColor, nodeBackgroundColor, nodeHoverColor)}
          </TreeNode>
        )
      }

      if (hasChildren && !isExpanded) {
        return (
          <TreeNode
            key={it.id}
            label={
              <StyledNode
                onClick={() => handleClick(it)}
                borderColor={nodeBorderColor}
                backgroundColor={nodeBackgroundColor}
                hoverColor={nodeHoverColor}
                elevation={1}
              >
                <NodeContent>
                  <IconButton
                    size='small'
                    onClick={e => handleExpandClick(e, it.id)}
                    sx={{
                      padding: '2px',
                      marginRight: '4px',
                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' }
                    }}
                  >
                    {isExpanded ? <ExpandMore /> : <ChevronRight />}
                  </IconButton>
                  <Typography variant='body2'>{it.name}</Typography>
                </NodeContent>
              </StyledNode>
            }
          />
        )
      }

      return (
        <TreeNode
          key={it.id}
          label={
            <StyledNode
              onClick={() => handleClick(it)}
              borderColor={nodeBorderColor}
              backgroundColor={nodeBackgroundColor}
              hoverColor={nodeHoverColor}
              elevation={1}
            >
              <NodeContent>
                <Typography variant='body2'>{it.name}</Typography>
              </NodeContent>
            </StyledNode>
          }
        />
      )
    })
  }

  useEffect(() => {
    if (!allowZoom) return

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel as any, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel as any)
    }
  }, [allowZoom])

  return (
    <TreeContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        cursor: draggable ? (isDragging ? 'grabbing' : 'grab') : 'default',
        ...style
      }}
      className={className}
    >
      <TreeWrapper scale={scale} translateX={translateX} translateY={translateY}>
        <Tree
          lineWidth={lineWidth}
          lineColor={lineColor}
          lineBorderRadius={lineBorderRadius}
          lineStyle={lineStyle}
          label={
            <StyledNode
              borderColor={nodeBorderColor}
              backgroundColor={nodeBackgroundColor}
              hoverColor={nodeHoverColor}
              elevation={1}
            >
              <Typography variant='body1' fontWeight='medium'>
                {rootLabel}
              </Typography>
            </StyledNode>
          }
        >
          {generateTree(data, nodeBorderColor, nodeBackgroundColor, nodeHoverColor)}
        </Tree>
      </TreeWrapper>
    </TreeContainer>
  )
}

export default TreeView
