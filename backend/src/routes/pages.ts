import express from 'express';
import { supabase } from '../lib/supabase';
import { requireAdmin } from '../middleware/adminAuth';

export const pagesRouter = express.Router();

// GET /api/pages/:slug - public: fetch page content for CMS
pagesRouter.get('/:slug', async (req, res) => {
  const { slug } = req.params;

  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching page:', error);
    return res.status(404).json({ error: 'Page not found' });
  }

  return res.json(data);
});

// PUT /api/pages/:slug - admin: upsert page content
pagesRouter.put('/:slug', requireAdmin, async (req, res) => {
  const { slug } = req.params;
  const { title, content_json } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }

  const { data, error } = await supabase
    .from('pages')
    .upsert(
      [
        {
          slug,
          title,
          content_json,
        },
      ],
      { onConflict: 'slug' }
    )
    .select()
    .single();

  if (error) {
    console.error('Error upserting page:', error);
    return res.status(500).json({ error: 'Failed to save page' });
  }

  return res.json(data);
});


