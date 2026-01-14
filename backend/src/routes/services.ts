import express from 'express';
import { supabase } from '../lib/supabase';
import { requireAdmin } from '../middleware/adminAuth';

export const servicesRouter = express.Router();

// GET /api/services - public list of active services
servicesRouter.get('/', async (_req, res) => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    return res.status(500).json({ error: 'Failed to fetch services' });
  }

  return res.json(data);
});

// POST /api/services - admin: create service
servicesRouter.post('/', requireAdmin, async (req, res) => {
  const { name, description, price, duration_minutes, is_active = true } = req.body;

  if (!name || price == null) {
    return res.status(400).json({ error: 'name and price are required' });
  }

  const { data, error } = await supabase
    .from('services')
    .insert([
      {
        name,
        description,
        price,
        duration_minutes,
        is_active,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating service:', error);
    return res.status(500).json({ error: 'Failed to create service' });
  }

  return res.status(201).json(data);
});

// PATCH /api/services/:id - admin: update service
servicesRouter.patch('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { name, description, price, duration_minutes, is_active } = req.body;

  const updates: Record<string, unknown> = {};
  if (name !== undefined) updates.name = name;
  if (description !== undefined) updates.description = description;
  if (price !== undefined) updates.price = price;
  if (duration_minutes !== undefined) updates.duration_minutes = duration_minutes;
  if (is_active !== undefined) updates.is_active = is_active;

  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating service:', error);
    return res.status(500).json({ error: 'Failed to update service' });
  }

  return res.json(data);
});


